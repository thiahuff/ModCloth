import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <div id="logo" />
                <Nav />
            </header>
        );
    }
}

export default Header;