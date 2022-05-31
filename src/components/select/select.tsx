import React, { Dispatch } from 'react';

interface SelectInterface {
  name        : string;
  label       : string;
  options     : string[];
  set         : Dispatch<any>;
}

const Select = (props:SelectInterface) => {
  return (
    <>
        <label htmlFor={props.name} className="form-label">{props.label}</label>
        <select 
            name={props.name}
            onChange={props.set} 
            className="form-select">
            <option selected>Selecciona una opción</option>
            {
                props.options.map(option => (
                    <option value={option}>{option}</option>
                ))
            }
        </select>
    </>
  );
}

export default Select;
