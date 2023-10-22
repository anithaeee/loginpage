import React, { useEffect } from 'react'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../loginform/Loginform.css';
import 'primeflex/primeflex.css';
const Loginform = () => {
    const [Inputvalue, setInputvalue] = useState([]);
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password,setpassword] = useState("");
    useEffect(()=>{
        localStorage.setItem('UserInfo',JSON.stringify(Inputvalue))
    },[Inputvalue])

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('UserInfo'));
        console.log(items, 'UserInfo');
        if(items){
            setInputvalue(items);
        }
    },[])

    const submitDetails=()=> {
        let object1 = Inputvalue;
        let object2 = object1.filter(x=>(x.Email===Username && x.Password===Password));
        if(object2.length===0){
            object1.push({Email:Username, Password:Password});
        }
        else{
            alert('user already exist');
        }
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
                 <InputText placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}></InputText>
            </div>
            <div style={{padding:"5px"}}>
                <Button className='btn' onClick={(e)=>{submitDetails()}}>submit</Button>
            </div>
           
        </div>
    </div>
  )
}
export default Loginform;