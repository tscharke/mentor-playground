import { Component, ReactNode } from 'react';

/*
  With React's ErrorBoundary-Approach, you have to learn
  the concepts of Class-Components, because you have to
  implement your own state and override the class-methods
  `getDerivedStateFromError` and `componentDidCatch`.

  And, as seen in the React-Documentation (https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries),
  Error boundaries do not catch errors for:

  - Event handlers
  - Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
  - Server side rendering
  - Errors thrown in the error boundary itself (rather than its children)
  */
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
	// Initial state
	state = {
		hasError: false,
	};

	// Override/Implement function out of React.Component
	static getDerivedStateFromError(error: unknown) {
		console.log('[ErrorBoundary|getDerivedStateFromError]', {
			error,
		});

		// Return a new state
		// In this case that an error occurred
		return {
			hasError: true,
		};
	}

	/*
    This is the "Error Boundary"
    A new way of handling errors in React >16
  */
	componentDidCatch(error: unknown, errorInfo: unknown) {
		console.log('[ErrorBoundary|componentDidCatch]', {
			error,
			errorInfo,
		});
	}

	// Override/Implement function out of React.Component
	// to render something
	render() {
		if (this.state.hasError) {
			return <h1>An error occurred</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
