import React, {Component} from "react";
import {
    NavLink,
} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/" className="link">Start</NavLink></li>
                    <li><NavLink to="/explanation" className="link">O co chodzi?</NavLink></li>
                    <li><NavLink to="/about" className="link">O nas</NavLink></li>
                    <li><NavLink to="/collab" className="link">Fundacja i organizacje</NavLink></li>
                    <li><NavLink to="/contact" className="link">Kontakt</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;