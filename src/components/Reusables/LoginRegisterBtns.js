import React from 'react';
import { Link } from 'react-router-dom';

function LoginRegisterBtns(props) {
        return (
                <div className="loginRegisterBtns flex">
                    <Link to={props.firstPath}> <button to={props.firstPath} className="loginRegisterBtns__first">{props.firstBtn}</button></Link>
                    <button to={props.secondPath} className="loginRegisterBtns__second">{props.secondBtn}</button>
                </div>
        )
};

export default LoginRegisterBtns;
