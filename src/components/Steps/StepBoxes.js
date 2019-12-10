import React, {Component} from "react";
import StepBox from './StepBox';

class StepBoxes extends Component {
    render() {
        return (
            <div className="steps__boxes flex">
                <StepBox title="Wybierz rzeczy" description="ubrania, zabawki, sprzęt i inne"/>
                <StepBox title="Spakuj je" description="skorzystaj z worków na śmieci"/>
                <StepBox title="Zdecyduj komu chcesz pomóc" description="wybierz zaufane miejsce"/>
                <StepBox title="Zamów kuriera" description="kurier przyjedzie w dogodnym terminie"/>
            </div>
        )
    }
}

export default StepBoxes;