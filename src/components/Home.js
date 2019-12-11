import React, {Component} from "react";
import LoginPanel from './../components/Home/LoginPanel';
import Navigation from './../components/Home/Navigation';
import Hero from './../components/Home/Hero';
import HomeThreeColumns from './../components/Home/HomeThreeColumns';


class Home extends Component {
    render() {
        return (
            <>
            <div name="home" className="container">
                <LoginPanel/>
                <Navigation/>
                <Hero/>
            </div>
            <HomeThreeColumns/>
            </>
        )
    }
}

export default Home;