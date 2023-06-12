
import './App.css';
import Login from './Component/Login';
import Home from './Component/Home';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Cardivasular from './Component/Cardivasular';
import JointHealth from './Component/JointHealth';
import BalanceAndFall from './Component/BalanceAndFall';
import Chronic from './Component/Chronic';
import Bone from './Component/Bone';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
    const nameChangeHandler = (nameInput) =>{
        console.log(nameInput)
        setName(nameInput);
       
    }
   const ageChangeHandler =(ageInput) =>{
    console.log(ageInput)
      setAge(ageInput)
      
   } 
 

  return (
   <BrowserRouter>
   <Routes>
   
    <Route path='/' element={<Login  onNameInput ={nameChangeHandler } onAgeInput ={ageChangeHandler} />}/>
    
   
    <Route path='/home' element={<Home nameData ={name} ageData={age} />}/>
    <Route path='/cardivasular' element={<Cardivasular/>}/>
    <Route path='/jointHealth' element={<JointHealth/>}/>
    <Route path='/balanceAndFall' element={<BalanceAndFall/>}/>
    <Route path='/bone' element={<Bone/>}/>
    <Route path='/chronic' element={<Chronic/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
