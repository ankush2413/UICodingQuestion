import React from "react";

const Step1 = ({onHandleChange,formData}) => {

    return(
        <>
            <h2>User Information</h2>
            <label>Name</label>
            <input id="name" name="name" placeholder="Enter your Name" value={formData.name} onChange={onHandleChange}/>
            <br/>
            <label>Email</label>
            <input id="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={onHandleChange} type="email"/>
        </>
    )
}
export default Step1;