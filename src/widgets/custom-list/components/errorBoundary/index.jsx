import PropTypes from "prop-types";
import React from "react";

import './styles.scss'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.warn("error", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1 className="error_boundary-headline">
          Что-то пошло не так.<br></br>Попробуйте позже.
        </h1>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.Node,
};

export default ErrorBoundary;
