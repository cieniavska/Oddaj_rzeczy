import React from "react";
import LoginPanel from './../Home/LoginPanel';
import Navigation from './../Home/Navigation';
import SectionTitle from './SectionTitle';
import Form from './Form';
import LoginRegisterBtns from './../Reusables/LoginRegisterBtns';


function UserPanel() {
        return (
            <>
            <LoginPanel/>
            <Navigation/>
            <div name="userPanel" className="userPanel flex">
                <SectionTitle title="Zaloguj się"/>
                <Form/>
                <LoginRegisterBtns 
                firstBtn="załóż konto"
                firstPath="/newUserPanel"
                secondBtn="zaloguj się"/>
            </div>
            </>
        )
};

export default UserPanel;