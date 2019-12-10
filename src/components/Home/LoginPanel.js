import React, {Component} from "react";
import {
    Link,
} from 'react-router-dom';

class LoginPanel extends Component {
    render() {
        return (
            <div className="loginPanel">
            <ul>
                <li><Link className="link" to='/login'>Zaloguj</Link></li>
                <li><Link className="link" to='/signIn'>Załóż konto</Link></li>
            </ul>
            </div>
        )
    }
}

export default LoginPanel;