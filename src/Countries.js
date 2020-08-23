import React, { Component } from 'react';

class Countries extends Component {
    state = {  }
    render() { 
        return ( 
            <figure>
            <img src={this.props.url} alt="" />
            <div>
                <h3>{this.props.capital}</h3>
                <h3>{this.props.population}</h3>
                <h3>{this.props.language}</h3>
                </div>
            </figure>
         );
    }
}
 
export default Countries;