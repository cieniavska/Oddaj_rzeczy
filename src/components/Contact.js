import React, {Component} from "react";
import SectionTitle from './Reusables/SectionTitle';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        msg: '',
        errorMsg: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmitForm = e => {
        e.preventDefault();
        this.setState({
            errorMsg: ""
        });

        if (parseInt(this.state.msg) >= 120) {
            this.setState({
                errorMsg: 'Wiadomość musi mieć conajmniej 120 znaków'
            })
            return false;
        }

    };

    render() {
        return (
            <div name="contact" className="contact flex">
                <div className="contact__empty"></div>
                <div className="contact__form">
                    <SectionTitle title="Skontaktuj się z nami"/>
                    <form onSubmit={this.handleSubmitForm} className="flex">
                        <div className="nameEmail flex">
                            <div className="nameEmail__first">
                                <label>Wpisz swoje imię</label>
                                <input name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
                            </div>
                            <div className="nameEmail__second">
                                <label>Wpisz swój email</label>
                                <input name="email" type="email" value={this.state.email} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="msg flex">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea name="msg" value={this.state.msg} onChange={this.handleChange}></textarea>
                            <div className="error">{this.state.errorMsg}</div>
                        </div>
                        <input className="submit" value="Wyślij" type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;