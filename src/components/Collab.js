import React, {Component} from 'react';
import SectionTitle from './../components/Reusables/SectionTitle';

export default class Collab extends Component {

    stan = {
        activeView: 1
    }

    changeView = (viewNum) => {
        console.log(viewNum);
        this.setState({
            activeView: viewNum
        })
    }

    render() {
        return (
            <div>
                    <div name="collab" className="collab__container flex">
                    <SectionTitle title="Komu pomagamy?"/>
                        <div className="collab__container__partners">
                            <button className="collab__container__partner" onClick={() => this.changeView(1)}>
                                <span>Fundacjom</span>
                            </button>
                            <button className="collab__container__partner" onClick={() => this.changeView(2)}>
                                <span>Organizacjom pozarządowym</span>
                            </button>
                            <button className="collab__container__partner" onClick={() => this.changeView(3)}>
                                <span>Lokalnym zbiórkom</span>
                            </button>
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit amet, tempor incididunt. Ut exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</span>
                        </div>
                    </div>
            </div>
        )
    }
}