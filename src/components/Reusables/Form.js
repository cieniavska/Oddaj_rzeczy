import React, {Component}  from "react";

class Form extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirm: '',
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state.email, this.state.password, this.state.confirmPassword)
      }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            errorEmail: '',
            errorPassword: '',
            errorConfirm: ''
        })

        if (!this.validateEmail(this.state.email)) {
            this.setState({
                errorEmail: "Podany email jest nieprawidłowy"
            })
        }
        
        if (this.state.password.length < 6) {
            this.setState({
                errorPassword: "Podane hasło jest nieprawidłowe"
            })
        }

        if ((this.props.isThisNewUser === "true" && this.state.confirmPassword !== this.state.password) || this.state.confirmPassword === '') {       
            this.setState({
                errorConfirm: "Podane hasła nie są takie same"
            })
        }
    };

    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
        

    render() {

        let confirmInput;
        if (this.props.isThisNewUser === "true") {
            confirmInput = 
                <>
                    <label>Powtórz hasło</label>
                    <input value={this.state.confirmPassword} name='confirmPassword' type="password" onChange={this.handleChange}></input>
                    <div className="error">{this.state.errorConfirm}</div>
                </>
    
        }

        return (
            <div className="form__container flex">
                <form className="form__login flex" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name='email' type='email'value={this.state.email} onChange={this.handleChange}></input>
                    <div className="error">{this.state.errorEmail}</div>
                    <label>Hasło</label>
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange}></input>
                    <div className="error">{this.state.errorPassword}</div>
                    {confirmInput}
                    {this.props.children}
                </form>
            </div>
        )
    }

};

export default Form;