import React from "react";
import { Link } from 'react-router-dom';

function GiveAwayBtn() {
    return (
            <>
             <div className="giveAwayBtn flex">
                    <Link to="/userPanel" className="link">ODDAJ RZECZY</Link>
             </div>
            </>
        )
};

export default GiveAwayBtn;