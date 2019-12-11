import React, {Component} from "react";
import LoginPanel from './../Home/LoginPanel';
import Navigation from './../Home/Navigation';
import SectionTitle from './SectionTitle';
import Form from './Form';


class NewUserPanel extends Component {
    render() {
        return (
            <>
            <LoginPanel/>
            <Navigation/>
            <div name="newUserPanel" className="userPanel flex">
                <SectionTitle title="Zarejestruj się"/>
                <Form/>
            </div>
            </>
        )
    }
}

export default NewUserPanel;