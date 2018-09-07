import React, { Component } from 'react';
export default class CounterButton extends Component {
    state = {  }
    handleClick = () => {
        this.props.cclick();
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.children}</button>
        );
    }
}