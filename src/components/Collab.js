import React, {Component} from 'react';
import SectionTitle from './../components/Reusables/SectionTitle';
import organizations from './../data/organizations';


export default class Collab extends Component {

    state = {
        activeView: 0
    }

    changeView = (viewNum) => {
        console.log(viewNum);
        this.setState({
            activeView: viewNum
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
                    </div>
            </div>
        )
    }
}