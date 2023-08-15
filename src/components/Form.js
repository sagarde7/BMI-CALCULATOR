import React, { useState } from 'react'

function Form() {
    const [weight,setWeight]=useState("");
    const [height,setHeight]=useState("");
    const [bmi,setBmi]=useState("");
    const [message,setMessage]=useState("")
    const Reload=(e)=>{
        setHeight(0);
        setWeight(0);
    }
    const calc=(e)=>{
        let sum=parseFloat(weight)/(parseFloat(height)/100)**2;
        setBmi("Your BMI is "+parseInt(sum))
        sum=parseInt(sum);
        if(sum<18.5){
            setMessage("Underweight")
        }
        else if(sum>=18.5&&sum<24.9){
           setMessage("Normal weight")}
           else if(sum>=25&&sum<30){
            setMessage("Overweight")
           } 
           else{
            setMessage("Obesity")
           }
           
    }
   
    
  return (
    <>
    <div className='container card-body ' align="center">
        <h1 align="center" className='my-5'>Bmi Calculator</h1>
      <div className="col-md-5">
  <label for="formGroupExampleInput" className="form-label">Enter Weight</label>
  <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter Weight in kgs"
  value={weight}
    onChange={(e)=>setWeight(e.target.value)}
  />
</div>
<div className="col-md-5 my-3">
  <label for="formGroupExampleInput2" className="form-label">Enter Height</label>
  <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Enter Height in cms"
  value={height}
  onChange={(e)=>setHeight(e.target.value)}
  />
</div>
<div class="col-12 my-12" align="center">
    <button type="submit" class="btn btn-primary mx-3 my-2" onClick={calc}>Calculate</button>
    <button type="submit" class="btn btn-primary" onClick={Reload}>Reload</button>
  </div>
  <h3>{bmi}</h3>
  <p>{message}</p>
    </div>
    
    </>
  )
}

export default Form
