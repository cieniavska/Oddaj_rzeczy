import React from "react";
import { Link } from 'react-router-dom';

function GiveAwayBtn() {
    return (
                <Link to="/userPanel" className="link">
                    <div className="giveAwayBtn flex">ODDAJ RZECZY</div>
                </Link>
        )
};

export default GiveAwayBtn;