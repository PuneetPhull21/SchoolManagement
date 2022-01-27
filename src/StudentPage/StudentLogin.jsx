import React from 'react';
import InputField from '../Ui/Input_Field';
import Button from '../Ui/button';
function StudentLogin() {
  return(
   <div>
    <InputField title="Email" placeholder="Enter the email" type="Email"/>
    <InputField title="Password" placeholder="Enter the Placeholder" type="password"/>
    <Button name="Login"/>
   </div>
  );
}

export {StudentLogin};