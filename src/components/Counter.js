import React from "react";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count+1
        });
    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count-1
            });
        } else if(this.state.count === 0) {
            this.setState({
                count: this.state.count
            })
        }
        
    }

    render() {
        return (<>
            <h2 title="Hello">{this.state.count}</h2>
            <button onClick={() => {this.increment()}}>+</button>
            <button onClick={() => {this.decrement()}}>-</button>
        </>)
    }
}

export default Counter;
