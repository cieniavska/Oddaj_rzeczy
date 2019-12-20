import React from "react";

function GiveAwayHero() {
        return (
            <header className="hero flex">
                <div className="hero__image2"></div>
                <div className="hero__emptySpace"></div>
                <div className="hero__welcomeBox flex">
                    <h1>Oddaj rzeczy, których już nie chcesz</h1>
                    <span>POTRZEBUJĄCYM</span>
                    <div className="hero__welcomeBox__decoration"></div>    
                    <div className="hero__welcomeBox__steps">Wystarczą 4 proste kroki</div>
                    <div className="steps__boxes flex">
                        <div className="steps__box flex">
                            <div className="steps__number">1</div>
                            <div className="steps__description">Wybierz rzeczy</div>
                        </div>
                        <div className="steps__box">
                            <div className="steps__number">2</div>
                            <div className="steps__description">Spakuj w worki</div>
                        </div>
                        <div className="steps__box">
                            <div className="steps__number">3</div>
                            <div className="steps__description">Wybierz fundację</div>
                        </div>
                        <div className="steps__box">
                            <div className="steps__number">4</div>
                            <div className="steps__description">Wybierz kuriera</div>
                        </div>
                    </div>

                </div>
            </header>
        )
    }

export default GiveAwayHero;