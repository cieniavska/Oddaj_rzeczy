import React from "react";
import LoginPanel from './../components/Home/LoginPanel';
import Navigation from './../components/Home/Navigation';
import GiveAwayHero from "./Home/GiveAwayForm/GiveAwayHero";

function GiveAwayForm() {
    return (
        <>
            <div name="giveAwayForm" className="container">
                <LoginPanel/>
                <Navigation/>
                <GiveAwayHero/>
            </div>
        </>
    )
}

export default GiveAwayForm;