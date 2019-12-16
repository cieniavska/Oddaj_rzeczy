import React from "react";
import LoginPanel from './../components/Home/LoginPanel';
import Navigation from './../components/Home/Navigation';
import Hero from './../components/Home/Hero';
import HomeThreeColumns from './../components/Home/HomeThreeColumns';
import Steps from './Steps';
import About from './/About';
import Contact from './Contact';
import Footer from './Footer';
import Collab from './Collab';


function Home() {
        return (
            <>
                <div name="home" className="container">
                    <LoginPanel/>
                    <Navigation/>
                    <Hero/>
                </div>
                <HomeThreeColumns/>
                <Steps/>
                <About/>
                <Collab/>
                <Contact/>
                <Footer/>
            </>
        )
}

export default Home;