import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops... Something wrong happened!</h1>
        }
        return this.props.children;
    }

    
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

}

export default ErrorBoundary