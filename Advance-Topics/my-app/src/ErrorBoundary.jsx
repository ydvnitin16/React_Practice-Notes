import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Sets error state
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Optional: Log error to analytics or console
  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
  }

// This will render the error handle using fallback as prop in errorboundary component wrapping its children to protect from ui errors
  render() {
    if (this.state.hasError) {
      // return <h2>🚨 Something went wrong.</h2>;
      return this.props.fallback
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
