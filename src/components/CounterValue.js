import React, { Component } from 'react';
export default class CounterValue extends Component {

    render() {
        return (
            <h2>Count: {this.props.count}</h2>            
        );
    }
}