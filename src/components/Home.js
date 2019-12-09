import React, {Component} from "react";
import Navigation from './../components/Home/Navigation';
import Hero from './../components/Home/Hero';
import HomeThreeColumns from './../components/Home/HomeThreeColumns';


class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Hero/>
                <HomeThreeColumns/>
            </div>
        )
    }
}

export default Home;