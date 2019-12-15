import React, {Component} from "react";
import SectionTitle from './Reusables/SectionTitle';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        msg: ''
    }

    render() {
        return (
            <div name="contact" className="contact flex">
                <div className="contact__empty"></div>
                <div className="contact__form">
                    <SectionTitle title="Skontaktuj się z nami"/>
                    <form className="flex">
                        <div className="nameEmail flex">
                            <div className="nameEmail_first">
                                <label>Wpisz swoje imię</label>
                                <input name="name" type="text" value={this.state.name}></input>
                            </div>
                            <div className="nameEmail_second">
                                <label>Wpisz swój email</label>
                                <input name="email" type="email" value={this.state.email}></input>
                            </div>
                        </div>
                        <div className="msg flex">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea name="msg" value={this.state.msg}></textarea>
                        </div>
                        <input className="submit" value="Wyślij" type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;