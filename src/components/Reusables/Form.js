import React  from "react";

function Form() {
        return (
            <div className="form__container flex">
                <form className="form__login flex">
                    <label for='email'>Email</label>
                    <input name='email' type='email'></input>
                    <label for='email'>Hasło</label>
                    <input name='password'type='password'></input>
                    {this.props.children}
                </form>
            </div>
        )
};

export default Form;