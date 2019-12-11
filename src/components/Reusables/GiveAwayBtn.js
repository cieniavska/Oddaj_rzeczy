import React, {Component} from "react";
import {Link as Anchor} from 'react-router-dom';
import { Link } from 'react-scroll';


class GiveAwayBtn extends Component {
    render() {
        return (
            <>
             <div className="giveAwayBtn flex">
                 <Link to="userPanel" smooth={true}>
                    <Anchor to="/userPanel" className="link">ODDAJ RZECZY</Anchor>
                </Link>
             </div>
            </>
        )
    }
}

export default GiveAwayBtn;