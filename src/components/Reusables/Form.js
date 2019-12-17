import React, {Component}  from "react";

class Form extends Component {

    state = {
        email: '',
        password: '',
        errorEmail: '',
        errorPassword: ''
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state.email, this.state.password)
      }

    handleSubmit = e => {
        e.preventDefault();
        // this.setState({
        //     errorEmail: '',
        //     errorPassword: ''
        // })
        console.log(this.state.email, this.state.password)
        if (this.state.password.length < 6) {
            console.log("wrong password")
            this.setState({
                errorPassword: "Podane hasło jest nieprawidłowe"
            })
            if (!this.validateEmail(this.state.email)) {
                console.log("wrong email")

                this.setState({
                    errorEmail: "Podany email jest nieprawidłowy"
                })
            }
        }
    };

    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
        

    render() {
        return (
            <div className="form__container flex">
                <form className="form__login flex" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name='email' type='email'value={this.state.email} onChange={this.handleChange}></input>
                    <div className="error">{this.state.errorEmail}</div>
                    <label>Hasło</label>
                    <input name='password'type='password' value={this.state.password} onChange={this.handleChange}></input>
                    <div className="error">{this.state.errorPassword}</div>
                    {this.props.children}
                </form>
            </div>
        )
    }

};

export default Form;