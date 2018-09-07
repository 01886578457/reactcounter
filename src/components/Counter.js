import React, { Component } from 'react';
import CounterValue from './CounterValue';
import CounterButton from './CounterButton';
export default class Counter extends Component {
    state = { count: 87 }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <CounterValue count={this.state.count}></CounterValue>
                <div>
                    <CounterButton cclick={this.increment}>+</CounterButton>
                    <CounterButton cclick={this.decrement}>-</CounterButton>
                </div>
            </div>
        );
    }
}