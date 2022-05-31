import React, { Dispatch } from 'react';

interface RadioButtonOptionInterface {
    value       : string;
    label       : string;
}

interface RadioButtonGroupInterface {
  name        : string;
  label       : string;
  options     : RadioButtonOptionInterface[];
  set         : Dispatch<any>;
}

const RadioButtonGroup = (props:RadioButtonGroupInterface) => {
  return (
    <>
        <label htmlFor="exampleFormControlInput1" className="form-label d-block">{props.label}</label>
        {props.options.map(option => (
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name={props.name} 
                    id={option.value} 
                    onChange={props.set}
                />
                <label className="form-check-label" htmlFor={option.value}>
                {option.label}
                </label>
            </div>
        ))}
    </>
  );
}

export default RadioButtonGroup;
