interface TextfieldInterface {
  name        : string;
  label       : string;
  placeholder : string;
  type        : string;
  set         : any;
  errors      : any;     
}

const Textfield = (props:TextfieldInterface) => {
  return (
    <>
      {/* <label htmlFor={props.name} className="form-label">{props.label}</label>
      <input type="email" className="form-control" id={props.name} placeholder={props.placeholder}/> */}
      <input 
        onSubmit={()=>{
          console.log('hey');
        }}
        name={props.name}
        placeholder={props.label} 
        onChange={(event: any)=>{
          props.set(event);
        }}
        className="form-control" 
        type="text" 
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