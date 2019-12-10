import React, {Component} from "react";
import StepsTitle from "./Steps/StepsTitle";
import StepBoxes from "./Steps/StepBoxes";

class Steps extends Component {
    render() {
        return (
            <>
                <StepsTitle/>
                <StepBoxes/>
            </>
        )
    }
}

export default Steps;