import React,{useState} from 'react';
import InputField from '../Ui/Input_Field';
import Button from '../Ui/button';
import './Admin.css';
import { connect } from 'react-redux';
import {adminActions} from "../_actions";
function Admin_Login(props) {
  const initialValue = {
    email:'',
    password:'',
  }
  const [credentials,setcredentials] = useState(initialValue);

  const handleChange =(e)=>{
    const {name ,value} = e.target;
    setcredentials({...credentials,[name]:value})
  }
  const onSubmit=(e)=>{
        e.preventDefault();
        console.log(credentials);
  }

  return(   
    <div className="container">
    <InputField   type="email" title="Email" name="email" onChange={handleChange}  placeholder="Enter your email" />
    <InputField  type="password" title="Password" name="password" onChange={handleChange} placeholder="Enter your Password"/>
    <Button name="Login" onClick={onSubmit} />
    </div>
  );
}


function mapState(state){
  console.log(state);
  return state
}
const userAction = {
login:adminActions.login
}

const adminlogin = connect(mapState,userAction)(Admin_Login);

export {adminlogin as Admin_Login};
