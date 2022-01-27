import React from 'react';

export default function Input_Field(props) {
  return(
   <>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">{props.title}</label>
  <input type={props.type} className="form-control" onChange={props.onChange} name={props.name}  placeholder={props.placeholder}/>
</div>
  </>
  );
}
