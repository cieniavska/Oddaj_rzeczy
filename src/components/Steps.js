import React from "react";
import SectionTitle from "./Reusables/SectionTitle";
import StepBoxes from "./Steps/StepBoxes";
import GiveAwayBtn from "./Reusables/GiveAwayBtn";

function Steps() {
        return (
            <>
                <SectionTitle name="steps" title="Wystarczą 4 proste kroki"/>
                <StepBoxes/>
                <div className="steps__container flex">
                <GiveAwayBtn/>
                </div>
            </>
        )
};

export default Steps;