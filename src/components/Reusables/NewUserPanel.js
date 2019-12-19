import React, {Component} from "react";
import LoginPanel from './../Home/LoginPanel';
import Navigation from './../Home/Navigation';
import LoginRegisterBtns from './../Reusables/LoginRegisterBtns';
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
                <Form>
                    <label for='email'>Powtórz hasło</label>
                    <input name='password'type='confirm-password'></input>
                    <LoginRegisterBtns firstBtn="zaloguj się"
                    firstPath="/userPanel"
                    secondBtn="zarejestruj się"/>
                </Form>
            </div>
            </>
        )
    }
}

export default NewUserPanel;