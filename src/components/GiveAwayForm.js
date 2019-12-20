import React from "react";
import LoginPanel from './../components/Home/LoginPanel';
import Navigation from './../components/Home/Navigation';
import GiveAwayHero from "./GiveAwayForm/GiveAwayHero";
import ImportantMsg from './../components/GiveAwayForm/ImportantMsg';
import importantMessages from './../data/importantMessages';

function GiveAwayForm() {
    return (
        <>
            <div name="giveAwayForm" className="container">
                <LoginPanel/>
                <Navigation/>
                <GiveAwayHero/>
            </div>
            <ImportantMsg title={"Ważne!"} text={importantMessages.messages[0].first}/>
        </>
    )
}

export default GiveAwayForm;