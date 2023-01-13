
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
        const h2 = React.createElement("h2", {}, this.state.count);
        const button = React.createElement("button", {title: "Hello", onClick: () => {this.increment()}}, '+');
        const button2 = React.createElement("button", {title: "Hello", onClick: () => {this.decrement()}}, '-');
        return React.createElement(React.Fragment, null, h2, button, button2);
    }
}

const component = React.createElement(Counter);

const root = document.querySelector("#root");
ReactDOM.render(component, root);