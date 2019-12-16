import React, {Component} from "react";
import SectionTitle from './Reusables/SectionTitle';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        msg: '',
        id: 0,
        errorName: '',
        errorEmail: '',
        errorMsg: '',
        success: '',
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmitForm = e => {
        e.preventDefault();
        this.setState({
            name: '',
            email: '',
            msg: '',
            errorName: '',
            errorEmail: '',
            errorMsg: '',
            id: this.state.id + 1
    });

        if (this.state.msg.length <= 120) {
            this.setState({
                errorMsg: 'Wiadomość musi mieć conajmniej 120 znaków'
            })
            if (/\s/.test(this.state.name)) {
                this.setState({
                    errorName: "Imię jest niepoprawne!"
                })
                if (!this.validateEmail(this.state.email)) {
                    this.setState({
                        errorEmail: "Email jest niepoprawny!"
                    })
                }
            }
        }
        else { 
            fetch(`http://localhost:3001/messages`,{
                method: 'POST',
                body: JSON.stringify({id: this.state.id, name: this.state.name, email: this.state.email, msg: this.state.msg}),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        success: 'Twoja wiadomość została wysłana pomyślnie! Wkrótce odezwiemy się do Ciebie',
                    })
                })
        }
    };

    validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }

    render() {
        return (
            <div name="contact" className="contact flex">
                <div className="contact__empty"></div>
                <div className="contact__form">
                    <SectionTitle title="Skontaktuj się z nami"/>
                    <div className="success">{this.state.success}</div>
                    <form onSubmit={this.handleSubmitForm} className="flex">
                        <div className="nameEmail flex">
                            <div className="nameEmail__first">
                                <label>Wpisz swoje imię</label>
                                <input name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
                                <div className="error">{this.state.errorName}</div>
                            </div>
                            <div className="nameEmail__second">
                                <label>Wpisz swój email</label>
                                <input name="email" type="email" value={this.state.email} onChange={this.handleChange}></input>
                                <div className="error">{this.state.errorEmail}</div>
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