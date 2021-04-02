import './Input.css';

const Input = (
  {label,
  forInput,
  type,
  placeholder,
  classList,
  id,
  descriptionId,
  smallText,
  handleChangeValue,
  name
}
) => {
  return (
    <div className="form-group">
      <label htmlFor={forInput}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} className={`form-control ${classList ? classList:''}`} onChange={handleChangeValue}/>
      {smallText ? 
      <small id={descriptionId} className="form-text text-muted">{smallText}</small> :
      null
      }
    </div>
  );
}
 
export default Input;