import React from "react";

const NavigationButton = ({currentStep,totalStep,onNext,onBack,onSubmit}) => {

    return(
        <div style={{marginTop:'20px'}}>
            {
                currentStep>0 && <button onClick={onBack}>Back</button>
            }
            {
                currentStep<(totalStep-1)?( <button onClick={onNext}>Next</button>):<button onSubmit={onSubmit}>Submit</button>
            }
        </div>
    )

}

export default NavigationButton;