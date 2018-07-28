import React, { Component } from 'react';

class FavItem extends Component {
    render() {
        return (
            <li className="fave-item" >{this.props.text}</li>
        );
    }
}

export default FavItem;