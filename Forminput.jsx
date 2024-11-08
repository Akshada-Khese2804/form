import React from 'react'
import './FormInput.css'
import { useState } from 'react'
function FormInput(props){
    let [focus,setFocus]=useState(false)
    //This defines a functional component named FormInput. The props parameter is an object that contains all the properties passed to the component.
    let {label,onChange,errorMessage,...inputProps}=props 
    let handelError=()=>{
        setFocus(true)
    }
     //label: The text that will be displayed for the input field.
    // onChange: A function that will be called when the input value changes (usually to update the state in the parent component).
    // id: A unique identifier for the input element, which is important for accessibility.
    // ...inputProps: This uses the rest operator to collect any other props that are not explicitly destructured. This allows the component to accept additional attributes (like type, placeholder, etc.) that will be passed directly to the <input> element.
    return(
    <>
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps}
        onChange={onChange}
        onBlur={handelError}
        focus={focus.toString()}
        />
        <span>{errorMessage}</span>
        {/* <h1>{errorMessage}</h1> */}
    </div>
    </>
    )
}
export default FormInput