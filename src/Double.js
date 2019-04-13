import React, { Component } from 'react';
import App from './App';

class Double extends Component {
    render() {
        return (
            <div>
            <App name="Pedro" />
            <App name="Jimmy" />
            </div>
        );
    }
}

export default Double;