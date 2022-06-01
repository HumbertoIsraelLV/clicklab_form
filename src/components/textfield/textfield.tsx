import { TextfieldInterface } from "../../interfaces/textfield";

const Textfield = (props:TextfieldInterface) => {
  return (
    <>
      {props.label &&
        <label 
          htmlFor={props.name} 
          className="form-label"
        >
          {props.label}
        </label>
      }
      <input
        name={props.name}
        placeholder={props.placeholder} 
        onChange={(event: any)=>{
          props.set(event);
        }}
        className="form-control" 
        type={props.type ?? "text"}
      />
      {
        props.errors[props.name] &&
        <div className="form-error rounded">
          {props.errors[props.name]}
        </div>
      }
    </>
  );
}

export default Textfield;