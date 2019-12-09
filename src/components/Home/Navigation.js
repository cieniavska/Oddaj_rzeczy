import React, {Component} from "react";
import {
    Link,
} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/explanation">O co chodzi?</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/collab">Fundacja i organizacje</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;