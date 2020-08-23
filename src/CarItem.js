import React, { Component } from 'react';

class CarItem extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>{this.props.make}</h2>
                <h2>{this.props.model}</h2>
                <h2>{this.props.year}</h2>
            </div>
        );
    }
}

export default CarItem;