import React,{useState} from "react";
import NavigationButton from "./NavigationButton";
import Step1 from "./formComponents/step1";
import Step2 from "./formComponents/Step2";
const OnboardingForm = ()=>{

    const [step,setStep] = useState(0);
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        city:'',
        pincode:'',

    })

    const next = () => setStep(prev=>prev+1);
    const prev = () => setStep(prev=>prev-1);
    const submit = () => console.log("Submitted");
    const onHandleChange = (e) => {
        const {name,value} = e.target; 
       setFormData(
        prev=>({
            ...prev,
            [name]:value
        })
       )
    }
    const steps = [
        <Step1 onHandleChange={onHandleChange} formData={formData}/>,
        <Step2 onHandleChange={onHandleChange} formData={formData}/>,
    ]
    return(
        <>
            {
                steps[step]
            }              
            <NavigationButton currentStep={step} totalStep={steps.length} onBack={prev} onNext={next} onSubmit={submit}/>   
        </>
    )
}

export default OnboardingForm;