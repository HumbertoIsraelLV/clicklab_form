interface SelectInterface {
  name        : string;
  label       : string;
  options     : string[];
  set         : any;
  errors      : any;
}

const Select = (props:SelectInterface) => {
  return (
    <>
      <label htmlFor={props.name} className="form-label" defaultValue={''}>{props.label}</label>
      <select 
        name={props.name}
        onChange={(event: any)=>{
          props.set(event);
        }} 
        className="form-select">
        <option key={props.name} value={''}>Selecciona una opción</option>
        {
            props.options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))
        }
      </select>
      {props.errors[props.name] &&
        <div className="form-error rounded">
          {props.errors[props.name]}
        </div>
      }
    </>
  );
}

export default Select;