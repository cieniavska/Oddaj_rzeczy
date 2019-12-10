import React, {Component} from "react";
import HomeOneColumn from './HomeOneColumn';

class HomeThreeColumns extends Component {
    render() {
        return (
            <div className="columns">
              <div className="container flex">
              <HomeOneColumn number='10' title='ODDANYCH WORKÓW' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'/>
                <HomeOneColumn number='5' title='WSPARTYCH ORGANIZACJI' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'/>
                <HomeOneColumn number='7' title='ZORGANIZOWANYCH ZBIÓREK' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'/>
              </div>
            </div>
        )
    }
};

export default HomeThreeColumns;