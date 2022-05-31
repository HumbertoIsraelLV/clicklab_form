import React, { Dispatch } from 'react';

interface TextfieldInterface {
  name        : string;
  label       : string;
  placeholder : string;
  type        : string;
  set         : Dispatch<any>;
}

const Textfield = (props:TextfieldInterface) => {
  return (
    <>
      {/* <label htmlFor={props.name} className="form-label">{props.label}</label>
      <input type="email" className="form-control" id={props.name} placeholder={props.placeholder}/> */}
      <input 
        name={props.name}
        placeholder={props.label} 
        onChange={props.set}
        className="form-control" 
        type="text" 
      />
    </>
  );
}

export default Textfield;
