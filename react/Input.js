import React, { useState, useEffect } from "react";

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

/**
 * Generates a InlineMultiSelect Form Input.
 * @param {{allOptions:{id:string,name:string}[], selectedValues:[],name:string, label?:string, onChange:function }} props 
 */
function InlineMultiSelect(props){
  const [selectedValues, setSelectedValues] = useState(new Set(props.selectedValues ? props.selectedValues : []))

  // when props.selectedValues changes, update the state accordingly. This helps when you are clearing selectedValues from parent component
  useEffect(() => {
    setSelectedValues(new Set(props.selectedValues))
  }, [props.selectedValues])

  function handleChange(event, categoryId){
    const selectedClone = new Set(selectedValues);
    if(selectedClone.has(categoryId)){
      selectedClone.delete(categoryId)
    } else {
      selectedClone.add(categoryId)
    }
    setSelectedValues(selectedClone);
    props.onChange(Array.from(selectedClone))
  }

  return (
    <div className="form-group">
      {props.label ? <p>{props.label}</p> : null }
      {props.allOptions.map( (cat, idx) => {
        return (
          <div key={cat.id} class="form-check form-check-inline">
            <input
              class="form-check-input" 
              type="checkbox" 
              id={`${props.name}-${idx}`} 
              name={props.name}
              value={cat.id}
              checked={selectedValues.has(cat.id) ? true : false }
              onChange={(event) => handleChange(event, cat.id) }
            />
            <label className="form-check-label" htmlFor={`${props.name}-${idx}`}>{cat.name}</label>
          </div>
        )
      })}
  </div>)
}

export { TextInput, InlineMultiSelect }