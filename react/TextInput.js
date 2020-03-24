import React from "react";

/**
 * Generates a Input Form. Below assumes that you have bootstrap imported in your project.
 * @param {{id?:string|number, label?:string, type?:string, placeholder?:string, smallLabel?:string}} props
 */
function TextInput(props) {
  let id = props.id ? props.id : Math.random().toString(36).substr(2); //If id is not provided, assign a random string.
  return (
    <div class="form-group">
      {props.label ? <label for={id}>{props.label}</label> : null}
      <input type={props.type ? props.type : "text"} className="form-control" id={id} aria-describedby={props.label} placeholder={props.placeholder} />
      {props.smallLabel ? <small id="id" className="form-text text-muted">{props.smallLabel}</small> : null}
    </div>
  )
}

export default TextInput