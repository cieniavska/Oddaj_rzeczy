import React, {Component} from "react";
import StepBox from './StepBox';

class StepBoxes extends Component {
    render() {
        return (
            <div>
                <StepBox title="Wybierz rzeczy"/>
                <StepBox title="Spakuj je"/>
                <StepBox title="Zdecyduj komu chcesz pomóc"/>
                <StepBox title="Zamów kuriera"/>
            </div>
        )
    }
}

export default StepBoxes;