import React, {Component} from "react";
import {
    Link,
} from 'react-router-dom';

class GiveAwayBtn extends Component {
    render() {
        return (
            <>
             <div className="giveAwayBtn flex"><Link to="giveAway" className="link">ODDAJ RZECZY</Link></div>
            </>
        )
    }
}

export default GiveAwayBtn;