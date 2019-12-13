import React, {Component} from "react";
import LoginPanel from './Home/LoginPanel';
import Navigation from './Home/Navigation';
import SectionTitle from './Reusables/SectionTitle';
import { Link } from 'react-router-dom';


class Logout extends Component {
    render() {
        return (
            <>
                <LoginPanel/>
                <Navigation/>
                <div name="newUserPanel" className="userPanel flex">
                    <SectionTitle title="Wylogowano pomyślnie!"/>
                    <Link to="/">
                        <button className="logout">Strona główna</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default Logout;