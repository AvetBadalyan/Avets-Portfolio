import { Component } from "react";
import "./ErrorBoundary.scss";

/**
 * ErrorBoundary — catches JavaScript errors in child components and displays
 * a fallback UI instead of crashing the whole app. React 19 still requires
 * class components for error boundaries (no hook equivalent yet).
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production you'd send this to an error tracking service
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <span className="error-boundary__icon" aria-hidden="true">
              ⚠️
            </span>
            <h1 className="error-boundary__title">Something went wrong</h1>
            <p className="error-boundary__message">
              The app encountered an unexpected error. Please try refreshing the
              page.
            </p>
            <button
              type="button"
              className="btn btn--primary error-boundary__btn"
              onClick={this.handleReload}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
