import React, {Component} from "react";

class Hero extends Component {
    render() {
        return (
            <header className="hero flex">
                <div className="hero__image"></div>
                <div className="hero__emptySpace"></div>
                <div className="hero__welcomeBox flex">
                    <h1>Zacznij pomagać!</h1>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <div className="hero__welcomeBox__decoration"></div>
                    <div className="hero__welcomeBox__btns flex">
                        <div className="flex">ODDAJ RZECZY</div>
                        <div className="flex">ZORGANIZUJ ZBIÓRKĘ</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero;