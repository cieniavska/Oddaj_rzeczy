import React, {Component} from 'react';
import SectionTitle from './../components/Reusables/SectionTitle';
import organizations from './../data/organizations';


export default class Collab extends Component {

    state = {
        activeView: 1,
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

    changeActivePage = (passedButtonNumber) => {
        this.setState({
            activePage: passedButtonNumber
        })
        console.log(passedButtonNumber);
    }

      buildButtons = () => {
          let buttons = [];
          for (let i=1; i <= this.state.availableButtons; i++) {
            buttons.push(<button key={i} onClick={ () => this.changeActivePage(i)} className="collab__container__button">{i}</button>);
          }
          return buttons;
      }

    buildList = () => {
          let array = organizations.organizations[this.state.activeView].foundations;
          let list = array.map( (element,index) => {
              return (
                <div key={index} className="collab__container__list flex">
                    <div className="collab__container__list__first-box">
                        <div className="collab__container__list__first-box__title">{element.name}</div>
                        <div className="collab__container__list__first-box__description">{element.mission}</div>
                    </div>
                    <div className="collab__container__list__second-box">{element.things}</div>
                </div>
              )
        })
        return list;
      }


    render() {

        let displayedList;
        if (this.state.activePage === 1) {
            displayedList = this.buildList().slice(0,3)
        } else if (this.state.activePage === 2) {
            displayedList = this.buildList().slice(3,6)
        } else if (this.state.activePage === 3) {
            displayedList = this.buildList().slice(6,9)
        } else {
            displayedList = this.buildList()
        }

        let displayedButtons;
        if (this.state.availableButtons > 0) {
            displayedButtons = this.buildButtons();
        }
        
        
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
                            {displayedList}
                        <div className="collab__container__buttons">
                            
                            {displayedButtons}
                        </div>
                    </div>
            </div>
        )
    }
}
