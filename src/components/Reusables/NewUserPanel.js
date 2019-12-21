import React, {Component} from "react";
import LoginPanel from './../Home/LoginPanel';
import Navigation from './../Home/Navigation';
import LoginRegisterBtns from './../Reusables/LoginRegisterBtns';
import SectionTitle from './SectionTitle';
import UserForm from './UserForm';


class NewUserPanel extends Component {

    
    render() {
        return (
            <>
            <LoginPanel/>
            <Navigation/>
            <div name="newUserPanel" className="userPanel flex">
                <SectionTitle title="Zarejestruj się"/>
                <UserForm isThisNewUser="true">
                    <LoginRegisterBtns firstBtn="zaloguj się"
                    firstPath="/userPanel"
                    secondBtn="zarejestruj się"/>
                </UserForm>
            </div>
            </>
        )
    }
}

export default NewUserPanel;