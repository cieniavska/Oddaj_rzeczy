import React, {Component} from "react";
import LoginPanel from './../Home/LoginPanel';
import Navigation from './../Home/Navigation';
import SectionTitle from './SectionTitle';
import UserForm from './UserForm';
import LoginRegisterBtns from './../Reusables/LoginRegisterBtns';


class UserPanel extends Component {

    render() {
        return (
            <>
            <LoginPanel/>
            <Navigation/>
            <div name="userPanel" className="userPanel flex">
                <SectionTitle title="Zaloguj się"/>
                <UserForm isThisNewUser="false">
                    <LoginRegisterBtns 
                    firstBtn="załóż konto"
                    firstPath="/newUserPanel"
                    secondBtn="zaloguj się"/>
                </UserForm>
            </div>
            </>
        )
    }
};

export default UserPanel;