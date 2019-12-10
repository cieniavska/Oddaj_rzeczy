import React, {Component} from "react";
import SectionTitle from './Reusables/SectionTitle';


class Contact extends Component {
    render() {
        return (
            <div className="contact flex">
                <div className="contact__empty"></div>
                <div className="contact__form">
                    <SectionTitle title="Skontaktuj się z nami"/>
                    <form className="flex">
                        <label for="name">Wpisz swoje imię</label>
                        <input name="name" type="text"></input>
                        <label for="email">Wpisz swój email</label>
                        <input name="email" type="email"></input>
                        <label for="msg">Wpisz swoją wiadomość</label>
                        <textarea></textarea>
                        <input name="submit" type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;