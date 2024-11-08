import React from 'react'
import './App.css'
import Forminput from "./Components/Forminput";
import { useState } from 'react'

export default function App() {

  let [values, setValues] = useState({
    useName:'',
    emailId:'',
    dob:'',
    contact:'',
    password:'',
    ConfirmPassword:'',
  })
  let onChange=(e)=>{ //let onChange = (e) => {: Declares a function onChange that takes an event object e as an argument. This function will be called whenever an input field's value changes.
    setValues({...values,[e.target.name]:[e.target.value]})
  }
  let inputs=[
    {
      id:1, //id: A unique identifier for the input.
      name:'userName',//name: The name attribute used to identify the input's value in the state.
      type:'text',//type: The type of input (e.g., text, number, password)
      placeholder:'Username',//placeholder: Placeholder text displayed in the input field.
      label:'Username' ,//label: A label for the input field, likely used for accessibility or display purposes.
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      required:true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id:2,
      name:'email',
      type:'text',
      placeholder:'Email',
      label:'Email',
      errorMessage:"It should be a valid email address!",
      required:true
    },
    {
      id:3,
      name:'dob',
      type:'text',
      placeholder:'Birthday',
      label:'Birthday',
      required:true
    },
    {
      id:4,
      name:'contact',
      type:'number',
      placeholder:'Contact',
      label:'Contact',
      errorMessage:"Plz enter a valid phone number!",
      required:true
    },
    {
      id:5,
      name:'password',
      type:'password',
      placeholder:'Password',
      label:'Password',
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required:true,
      pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$,"

    },
    {
      id:6,
      name:'confirmPassword',
      type:'password',
      placeholder:'Confirm Password',
      label:'Confirm Password',
      errorMessage:"Passwords don't match!",
      required:true,
      pattern:values.password
    }
  ]
  
  // console.log(userName);

  //let [emailId, setEmailId] = useState("")
  //console.log(emailId);

  //let [password, setPassword] = useState("")
  //c//onsole.log(password);

  //let [confirmPassword, setConfirmPassword] = useState("")
  //console.log(confirmPassword);

  //let [dob, setDob] = useState("")
  //console.log(dob);

  //let [contact, setContact] = useState("")
  //console.log(contact);

  let onSubmit = (e) => { //let onSubmit = (e) => {: Declares a function onSubmit that takes an event object e as an argument. This function will be called when the form is submitted.
    e.preventDefault()//e.preventDefault();: This method prevents the default behavior of the form submission, which would normally cause the page to refresh. By preventing this behavior, the application can handle the submission with JavaScript, allowing for more control over the process.
    let data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries())) // This converts the FormData object into a plain object and logs it to the console. This allows you to see the key-value pairs of the form inputs upon submission.
  }

  return (
    <>
      <div className='app'>
        <form onSubmit={onSubmit}>
          <h1>Form</h1>
        {/* This defines a form element that will call the onSubmit function when submitted. */}
          {inputs.map((input)=>(
            <Forminput
            key={input.id} //key Prop: The key prop is set to input.id. This is a unique identifier for each input field, which helps React efficiently update and manage the list of elements. Keys should be unique among siblings.
            {...input} //spread operator Spread Operator: The {...input} syntax uses the spread operator to pass all properties of the input object as props to the FormInput component. This means that if the input object has properties like type, name, placeholder, etc., they will be passed directly to the FormInput.
            value={values[input.name]}
            onChange={onChange}
            />
          ))}
           {/* <Forminput placeholder="UserName" name='userName' setUserName={setValues} />
          <Forminput placeholder="Email Id" name='emailId' setUserName={setValues} />
          <Forminput placeholder="Password" name='password' setUserName={setValues} />
           <Forminput placeholder="Confirm Password" name='confirmPassword' setUserName={setValues} />
          <Forminput placeholder="Date Of Birth" name='dob' setUserName={setValues} />
          <Forminput placeholder="Contact" name='contact' setUserName={setValues} /> */}
           <button>Submit</button>
        </form>
      </div>
    </>
  )
}

