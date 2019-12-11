import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';


class GiveAwayBtn extends Component {
    render() {
        return (
            <>
             <div className="giveAwayBtn flex">
                 <Link to="userPanel" smooth={true}>
                    <NavLink to="/userPanel" className="link">ODDAJ RZECZY</NavLink>
                </Link>
             </div>
            </>
        )
    }
}

export default GiveAwayBtn;