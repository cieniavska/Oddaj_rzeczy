import React, {Component} from 'react';
import SectionTitle from './../components/Reusables/SectionTitle';
import organizations from './../data/organizations';


export default class Collab extends Component {

    state = {
        activeView: 0,
        availableButtons: 2,
        activePage: 1
    }

    changeView = (viewNum) => {

        console.log(
            organizations.organizations[0].foundations.length,
            organizations.organizations[1].foundations.length,
            organizations.organizations[2].foundations.length,
            );

            let howManyButtons;
            let numberOfPositions = parseInt(organizations.organizations[this.state.activeView].foundations.length);
            if (numberOfPositions % 3 === 0) {
                howManyButtons = numberOfPositions / 3;
            } else if (numberOfPositions === 3) {
                howManyButtons = 1;
            } else {
                howManyButtons = 0;
            }

        this.setState({
            activeView: viewNum,
            availableButtons: howManyButtons 
        });
        this.showIndexDescription();
    }

    showIndexDescription = () => {
        if (this.state.activeView === "0") {
            return 0;
        } else if (this.state.activeView === "1") {
            return 1;
        } else {
            return 2;
        }
    }

    displayButtons = () => {
        let i = 0;
        let buttons = [];
        while (i < this.state.availableButtons) {
          i++;
          buttons.push(<button className="collab__container__button">{i}</button>);
        }
        return buttons;
      }

    render() {
        
        
        return (
            <div>
                    <div name="collab" className="collab__container flex">
                    <SectionTitle title="Komu pomagamy?"/>
                        <div className="collab__container__partners">
                            <button className="collab__container__partner" onClick={() => this.changeView(0)}>
                                <span>{organizations.organizations[0].navName}</span>
                            </button>
                            <button className="collab__container__partner" onClick={() => this.changeView(1)}>
                                <span>{organizations.organizations[1].navName}</span>
                            </button>
                            <button className="collab__container__partner" onClick={() => this.changeView(2)}>
                                <span>{organizations.organizations[2].navName}</span>
                            </button>
                        </div>
                        <div>
                            <span>{organizations.organizations[this.state.activeView].description}</span>
                        </div>
                        <div className="collab__container__list flex">
                            <div className="collab__container__list__first-box">
                                <div className="collab__container__list__first-box__title">{organizations.organizations[0].foundations[0].name}</div>
                                <div className="collab__container__list__first-box__description">{organizations.organizations[0].foundations[0].mission}</div>
                            </div>
                            <div className="collab__container__list__second-box">{organizations.organizations[0].foundations[0].things}</div>
                        </div>
                        <div className="collab__container__buttons">
                            
                            {this.displayButtons()}
                        </div>
                    </div>
            </div>
        )
    }
}