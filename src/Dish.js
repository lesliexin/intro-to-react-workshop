import React from "react";

export class Dish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    addDish = () => {
        this.setState({
            counter: this.state.counter+1
        });
    }

    render() {
        return (
            <div className="Dish">
                <h2>{this.props.name}</h2>
                <p>Amount: {this.state.counter}</p>
                <button onClick={this.addDish}>Add dish</button>
            </div>
        );
    }
}
