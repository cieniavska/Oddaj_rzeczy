import React from "react";
import {Link} from 'react-router-dom';

function Hero() {
        return (
            <header className="hero flex">
                <div className="hero__image"></div>
                <div className="hero__emptySpace"></div>
                <div className="hero__welcomeBox flex">
                    <h1>Zacznij pomagać!</h1>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <div className="hero__welcomeBox__decoration"></div>
                    <div className="hero__welcomeBox__btns flex">
                        <Link to="/userPanel" className="link"><div className="flex">ODDAJ RZECZY</div></Link>
                        <Link to ="/userPanel" className="link"><div className="flex">ZORGANIZUJ ZBIÓRKĘ</div></Link>
                    </div>
                </div>
            </header>
        )
    }

export default Hero;