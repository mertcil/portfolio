---
title: "WebRTC and Real-Time Communication: Building Diyalog Video Platform"
date: "2019-01-20"
author: "Mevlüt Mert Çİl"
category: "Real-Time Systems"
tags: ["webrtc", "react", "node.js", "real-time", "video"]
excerpt: "Insights from building Diyalog, a WebRTC-based online meeting platform, covering frontend React development and backend real-time infrastructure."
---

# WebRTC and Real-Time Communication: Building Diyalog Video Platform

Real-time video communication over the web seemed like science fiction not long ago. WebRTC changed everything. Building Diyalog, a WebRTC-based meeting platform, taught me about the complexities of peer-to-peer communication, fallback mechanisms, and real-time performance.

## WebRTC Architecture

```
Browser A → STUN Server → Determine public IP
         → TURN Server → Relay if needed

Browser A ← Peer Connection → Browser B
```

## Setting Up WebRTC Connection

```javascript
// Initialize peer connection
const peerConnection = new RTCPeerConnection({
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    {
      urls: 'turn:your-turn-server.com',
      username: 'user',
      credential: 'pass'
    }
  ]
});

// Add local stream
const stream = await navigator.mediaDevices.getUserMedia({
  video: { width: 1280, height: 720 },
  audio: true
});

stream.getTracks().forEach(track => {
  peerConnection.addTrack(track, stream);
});

// Create offer
const offer = await peerConnection.createOffer();
await peerConnection.setLocalDescription(offer);

// Send offer to remote peer
signaling.send('offer', offer);
```

## React Component for Video Display

```javascript
import React, { useRef, useEffect } from 'react';

export function VideoStream({ stream, label }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={label === 'local'}
        className="video-stream"
      />
      <p className="video-label">{label}</p>
    </div>
  );
}
```

## Signaling Server with Node.js

```javascript
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: { origin: "*" }
});

// Track active connections
const rooms = new Map();

io.on('connection', (socket) => {
  socket.on('join-room', ({ roomId, userId }) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit('user-joined', { userId });
  });

  socket.on('offer', ({ roomId, offer, targetUserId }) => {
    io.to(roomId).emit('offer-received', { offer, fromUserId: socket.id });
  });

  socket.on('answer', ({ roomId, answer, targetUserId }) => {
    io.to(roomId).emit('answer-received', { answer, fromUserId: socket.id });
  });

  socket.on('ice-candidate', ({ roomId, candidate }) => {
    socket.broadcast.to(roomId).emit('ice-candidate-received', candidate);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-left', { userId: socket.id });
  });
});

server.listen(3000, () => {
  console.log('Signaling server running on port 3000');
});
```

## Handling Network Degradation

```typescript
class MediaQualityManager {
  private constraints = {
    high: { video: { width: 1280, height: 720 }, audio: true },
    medium: { video: { width: 640, height: 480 }, audio: true },
    low: { video: { width: 320, height: 240 }, audio: false }
  };

  adjustQuality(bandwidthMbps: number) {
    if (bandwidthMbps > 5) {
      return this.constraints.high;
    } else if (bandwidthMbps > 1) {
      return this.constraints.medium;
    } else {
      return this.constraints.low;
    }
  }
}
```

## Redis for Connection State

```javascript
const redis = require('redis');
const client = redis.createClient();

// Store active sessions
async function createSession(roomId, userId) {
  const session = {
    userId,
    roomId,
    joinedAt: new Date(),
    isActive: true
  };

  await client.hSet(`room:${roomId}`, userId, JSON.stringify(session));
  await client.expire(`room:${roomId}`, 3600); // 1 hour expiry
}

async function getActiveParticipants(roomId) {
  const participants = await client.hGetAll(`room:${roomId}`);
  return Object.values(participants).map(p => JSON.parse(p));
}
```

## Performance Monitoring

```typescript
class ConnectionMonitor {
  async monitorConnection(peerConnection: RTCPeerConnection) {
    setInterval(async () => {
      const stats = await peerConnection.getStats();

      stats.forEach(report => {
        if (report.type === 'inbound-rtp') {
          console.log('Incoming bitrate:', report.bytesReceived);
          console.log('Packets lost:', report.packetsLost);
        }

        if (report.type === 'outbound-rtp') {
          console.log('Outgoing bitrate:', report.bytesSent);
          console.log('Frame rate:', report.framesPerSecond);
        }

        if (report.type === 'candidate-pair') {
          if (report.state === 'succeeded') {
            console.log('Latency:', report.currentRoundTripTime * 1000, 'ms');
          }
        }
      });
    }, 1000);
  }
}
```

## Handling Connection Failures

```typescript
class ResilientPeerConnection {
  private retryAttempts = 0;
  private maxRetries = 3;

  async establishConnection(remoteOffer: RTCSessionDescriptionInit) {
    try {
      await this.peerConnection.setRemoteDescription(
        new RTCSessionDescription(remoteOffer)
      );

      const answer = await this.peerConnection.createAnswer();
      await this.peerConnection.setLocalDescription(answer);

      this.retryAttempts = 0; // Reset on success
      return answer;
    } catch (error) {
      if (this.retryAttempts < this.maxRetries) {
        this.retryAttempts++;
        console.log(`Retrying... (${this.retryAttempts}/${this.maxRetries})`);

        // Exponential backoff
        await new Promise(r => setTimeout(r, Math.pow(2, this.retryAttempts) * 100));
        return this.establishConnection(remoteOffer);
      }

      throw error;
    }
  }
}
```

## Key Learnings from Building Diyalog

1. **Network is unreliable** - Always have fallbacks
2. **Real-time communication is CPU-intensive** - Optimize carefully
3. **Signaling matters** - Choose reliable signaling protocols
4. **TURN servers are expensive** - But necessary for NAT traversal
5. **Monitoring is critical** - You can't fix what you can't see
6. **Users tolerate latency, not disconnections** - Reliability > perfection

Building Diyalog was one of the most technically challenging projects I've worked on. Real-time communication exposes every weakness in your system—network, CPU, memory, and algorithm efficiency all matter.
