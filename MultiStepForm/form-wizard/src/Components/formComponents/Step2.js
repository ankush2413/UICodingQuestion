

const Step2 = ({onHandleChange,formData}) => {

    return(
        <>
          <h2>Address</h2>
          <label>City</label>
          <input onChange={onHandleChange} value={formData.city} placeholder="Please Enter your city"/>
          <br/>
          <label>PinCode</label>
          <input onChange={onHandleChange} value={formData.pincode} placeholder="Please Enter Your Pincode"/>
        </>
    )
}

export default Step2;