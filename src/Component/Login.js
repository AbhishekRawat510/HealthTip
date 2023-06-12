import React, { useState } from 'react'
import { Button } from 'reactstrap'
import {  useNavigate } from 'react-router-dom';


export default function Login(props) {
  const navigate = useNavigate();
  
const [name, setName] = useState("");
const [age, setAge] = useState("");
  const nameChangeHandler = (e) =>{
    
      setName(e.target.value);
      
  }
 const ageChangeHandler =(e) =>{
    setAge(e.target.value)
 } 

 const Submit = (e)=> {
e.preventDefault();
const data ={
  nameIn :name,
  ageIn :age
}

 props.onNameInput (data.nameIn);
  props.onAgeInput(data.ageIn);
  
  
  if(name !=="" && age !=="" && age >=50){

  navigate("/home");
  }
}  

   return (

    <div className='App-header'>
        <h1>How to live healthier and better life</h1>
        <form onSubmit={Submit}>
          <table>
            <tr>
           <td> <label>Enter Your Name</label></td>
            
           <td> <input  type='text' value={name} onChange={nameChangeHandler}></input></td>
            </tr>
            
            <tr>
            <td> <label>Enter Your Age</label></td>

            <td><input type='number' value={age} min={50} onChange={ageChangeHandler}></input></td>
            </tr>
            
              <tr>
           <td> <Button>Submit</Button></td>
            </tr>
            </table>
        </form>
    </div>
  )
}
