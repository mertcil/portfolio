---
title: "React Patterns: Hooks, State Management, and Functional Components"
date: "2019-06-30"
author: "Mevlüt Mert Çİl"
category: "Frontend Development"
tags: ["react", "javascript", "hooks", "state", "functional-components"]
excerpt: "Understanding React hooks, managing component state effectively, and building functional components at scale."
---

# React Patterns: Hooks, State Management, and Functional Components

React Hooks revolutionized how we write React components. Moving from class components to functional components with hooks has been one of the most significant improvements in the React ecosystem.

## Functional Components vs Class Components

```javascript
// Old class component
class UserProfile extends React.Component {
  state = { user: null, loading: true };

  componentDidMount() {
    fetchUser(this.props.userId).then(user => {
      this.setState({ user, loading: false });
    });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    return <div>{this.state.user.name}</div>;
  }
}

// Modern functional component with hooks
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(user => {
      setUser(user);
      setLoading(false);
    });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

## Custom Hooks for Logic Reuse

```javascript
function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setStatus('pending');
    try {
      const response = await asyncFunction();
      setData(response);
      setStatus('success');
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, data, error };
}

// Usage
function DataFetcher({ id }) {
  const { data, status, error } = useAsync(
    () => fetch(`/api/data/${id}`).then(r => r.json())
  );

  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}
```

## useReducer for Complex State

```javascript
function useAsync(asyncFunction, immediate = true) {
  const initialState = {
    status: 'idle',
    data: null,
    error: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'PENDING':
        return { ...state, status: 'pending' };
      case 'SUCCESS':
        return { status: 'success', data: action.payload, error: null };
      case 'ERROR':
        return { status: 'error', error: action.payload, data: null };
      default:
        return state;
    }
  }, initialState);

  const execute = useCallback(async () => {
    dispatch({ type: 'PENDING' });
    try {
      const response = await asyncFunction();
      dispatch({ type: 'SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error });
    }
  }, [asyncFunction]);

  return { ...state, execute };
}
```

## Context API for Global State

```javascript
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return React.useContext(ThemeContext);
}

// Usage
function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
```

## Memoization to Prevent Unnecessary Renders

```javascript
// Without memo - renders on every parent update
function ExpensiveComponent({ data }) {
  return <div>{/* Complex rendering */}</div>;
}

// With memo - only renders when props change
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering */}</div>;
});

// Using useMemo for expensive computations
function DataAnalyzer({ largeDataset }) {
  const processedData = useMemo(() => {
    return largeDataset
      .filter(item => item.active)
      .sort((a, b) => b.value - a.value)
      .map(item => ({ ...item, rank: calculateRank(item) }));
  }, [largeDataset]);

  return <div>{/* Use processedData */}</div>;
}

// useCallback to memoize callbacks
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty deps - memoized once

  return <ChildComponent onButtonClick={handleClick} />;
}
```

## Error Boundaries

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error.message}</div>;
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <RiskyComponent />
</ErrorBoundary>
```

## Key React Principles

1. **Functional components are the future** - Simpler, more testable
2. **Hooks enable logic reuse** - No more wrapper hell
3. **Memoization prevents performance regressions** - But don't overuse
4. **Context is not a store** - For shared values, not state management
5. **Error boundaries catch accidents** - But don't rely on them for flow control

React's evolution from class to functional components represents a significant improvement in how we think about UI logic.
