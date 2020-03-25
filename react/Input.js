import React from "react";

/**
 * Generates a Input Form. Below assumes that you have react and bootstrap imported in your project.
 * @param {{id?:string|number, label?:string, type?:string, placeholder?:string, smallLabel?:string, value:string, onChange:function}} props
 */
function TextInput(props) {
  let id = props.id ? props.id : Math.random().toString(36).substr(2); //If id is not provided, assign a random string.
  return (
    <div className="form-group">
      {props.label ? <label htmlFor={id}>{props.label}</label> : null}
      <input 
        value={props.value}
        onChange={props.onChange}
        type={props.type ? props.type : "text"} 
        className="form-control" 
        id={id} 
        aria-describedby={props.label} 
        placeholder={props.placeholder} 
      />
      {props.smallLabel ? <small id="id" className="form-text text-muted">{props.smallLabel}</small> : null}
    </div>
  )
}

export { TextInput }