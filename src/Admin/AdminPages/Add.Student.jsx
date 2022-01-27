import React from 'react';
import InputField from '../../Ui/Input_Field';
import Button from '../../Ui/button';
function AddStudent() {
  return <div>
      <InputField type="email" title="Email" placeholder="Email"/>
      <InputField type="text" title="First Name" placeholder="Enter the First Name"/>
      <InputField type="text" title="Last Name" placeholder="Enter the Last Name"/>
      <InputField type="file" title="Profile Photo"/>
      <InputField type="text" title="Father Name" placeholder="Enter the Father Name"/>
      <InputField type="text" title="Mother Name" placeholder="Enter the Mother Name"/>
      <InputField type="text" title="Phone Number" placeholder="Enter the Number"/>
      <InputField type="text" title="Permanent Address" placeholder="Enter the Permanent Address"/>
      <InputField type="text" title="Class" placeholder="Enter the Class"/>
      <InputField type="file" title="Parent's Photo" />
     <Button name="Add"/> <span> <Button name="Reset"/> </span>
  </div>;
}

export {AddStudent};
