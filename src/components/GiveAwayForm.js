import React, {Component} from "react";
import LoginPanel from './../components/Home/LoginPanel';
import Navigation from './../components/Home/Navigation';
import GiveAwayHero from "./GiveAwayForm/GiveAwayHero";
import ImportantMsg from './../components/GiveAwayForm/ImportantMsg';
import GiveAwaySteps from './../components/GiveAwayForm/GiveAwaySteps';
import GiveAwayStepsFirst from './../components/GiveAwayForm/GiveAwayFirst';
import GiveAwayStepsSecond from './../components/GiveAwayForm/GiveAwaySecond';
import GiveAwayThankYou from './../components/GiveAwayForm/GiveAwayThankYou';


import importantMessages from './../data/importantMessages';
import Contact from './Contact';
import Footer from './Footer';

class GiveAwayForm extends Component {

    state = {
        pageDisplayed: 1,
        message: ''
    }

    callbackFunction = (childData) => {
      this.setState({pageDisplayed: this.state.pageDisplayed + 1, message: childData});
      console.log(this.state.message)
    }

    render() {

        let importantMessage;
        let displayedStep;
        if (this.state.pageDisplayed === 1) {
            importantMessage = importantMessages.messages[0].first;
            displayedStep = <GiveAwayStepsFirst parentCallback={this.callbackFunction}/>
        } else if (this.state.pageDisplayed === 2) {
            importantMessage = importantMessages.messages[0].second;
            displayedStep = <GiveAwayStepsSecond/>
        } else if (this.state.pageDisplayed === 3) {
            importantMessage = importantMessages.messages[0].third;
        } else if (this.state.pageDisplayed === 4) {
            importantMessage = importantMessages.messages[0].fourth
        } else if (this.state.pageDisplayed === 5) {
            displayedStep = <GiveAwayThankYou/>
        }

        return (
            <>
                <div name="giveAwayForm" className="container">
                    <LoginPanel/>
                    <Navigation/>
                    <GiveAwayHero/>
                </div>
                <ImportantMsg title={"Ważne!"} text={importantMessage}/>
                <GiveAwaySteps>
                    {displayedStep}
                </GiveAwaySteps>
                <Contact/>
                <Footer/>
            </>
        )
    }
}

export default GiveAwayForm;