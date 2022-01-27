import React from 'react';
import InputField from '../../Ui/Input_Field';
import Button from '../../Ui/button';

function AddTeacher() {
  return( 
  <div>
      <InputField type="email" title="Email" placeholder="Email"/>
      <InputField type="text" title="First Name" placeholder="Enter the First Name"/>
      <InputField type="text" title="Last Name" placeholder="Enter the Last Name"/>
      <InputField type="file" title="Profile Photo"/>
      <InputField type="text" title="Phone Number" placeholder="Enter the Number"/>
      <InputField type="text" title="Permanent Address" placeholder="Enter the Permanent Address"/>
      <InputField type="text" title="Qualification" placeholder="Enter the Qualification"/>
      <InputField type="text" title="Experience" placeholder="Enter the Experience"/>
      <InputField type="password" title="Password" placeholder="Enter the Password"/>
      <Button name="Add"/> 
      <br></br>
      <Button name="Reset"/>
  </div>
  );
}

export {AddTeacher};
