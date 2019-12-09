import React, {Component} from "react";
import HomeOneColumn from './HomeOneColumn';

class HomeThreeColumns extends Component {
    render() {
        return (
            <div>
                <HomeOneColumn number='10' title='ODDANYCH WORKÓW' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <HomeOneColumn number='5' title='WSPARTYCH ORGANIZACJI' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                <HomeOneColumn number='7' title='ZORGANIZOWANYCH ZBIÓREK' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            </div>
        )
    }
};

export default HomeThreeColumns;