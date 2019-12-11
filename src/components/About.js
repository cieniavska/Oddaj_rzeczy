import React, {Component} from "react";
import SectionTitle from "./Reusables/SectionTitle";


class About extends Component {
    render() {
        return (
            <div name="about" className="about flex">
                <div className="about__text flex">
                    <SectionTitle title="O nas"/>
                    <div className="about__text__description">Lorem ipsum dolor sit amet, tempor incididunt. Ut exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur id est laborum.</div>
                </div>
                <div className="about__image"></div>
            </div>
        )
    }
}

export default About;