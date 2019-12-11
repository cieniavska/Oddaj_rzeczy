import React, {Component} from "react";
import LoginPanel from './../Home/LoginPanel';
import Navigation from './../Home/Navigation';
import SectionTitle from './SectionTitle';
import Form from './Form';


class UserPanel extends Component {
    render() {
        return (
            <>
            <LoginPanel/>
            <Navigation/>
            <div name="userPanel" className="userPanel flex">
                <SectionTitle title="Zaloguj się"/>
                <Form/>
            </div>
            </>
        )
    }
}

export default UserPanel;