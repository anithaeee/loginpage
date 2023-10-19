import React from 'react'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../loginform/Loginform.css';
import 'primeflex/primeflex.css';
const Loginform = () => {
    const [Inputvalue, setInputvalue] = useState({});
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");

    const submitDetails=()=> {
        let object1 = Inputvalue;
        object1.push({Email:Username,Email: Email })
        setInputvalue(object1);
    }
  return (
    <div className='maindiv'>
        <div className='Card'>
            <div className='text-field'>
                <label className='Label'>Name:</label>
                <InputText  placeholder="Name" onChange={(e)=>{setUsername(e.target.value)}}></InputText>
            </div>
            <div className='text-field'>
                <label className='Label'>Email:</label>
               <InputText  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></InputText>
            </div>
            <div className='text-field'>
                <label className='Label'>Password:</label>
                 <InputText placeholder='Password'></InputText>
            </div>
            <div style={{padding:"5px"}}>
                <Button className='btn' onClick={(e)=>{submitDetails()}}>submit</Button>
            </div>
           
        </div>
    </div>
  )
}
export default Loginform;