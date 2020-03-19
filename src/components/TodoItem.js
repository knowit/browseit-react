import React, { useState } from "react";

export function TodoItem(props) {
  const label = props.label;
  const id = props.id;
  const timeId = props.id.concat("_time");
  const styles = {
    input: {
      width: "4.5em"
    }
  };

  const [checked, setChecked] = useState(
    localStorage.getItem(id)
  );
  const [text, setText] = useState(
    localStorage.getItem(timeId)
  )

  const handleCheck = () => {
    let value = checked === "true" ? "false" : "true";
    localStorage.setItem(id, value);
    setChecked(value);
  };

  const handleText = event => {
    localStorage.setItem(timeId, event.target.value)
    setText(event.target.value)
  }

  return (
    <div>
      {props.placeholder && (
        <input
          type="text"
          id={timeId}
          placeholder={props.placeholder}
          style={styles.input}
          value= {text ? text : ""}
          onChange={handleText}
        ></input>
      )}

      <input
        type="checkbox"
        id={id}
        style={styles.checkbox}
        onChange={handleCheck}
        checked={checked === "true" ? true : false}
      ></input>
      <label>{label}</label>
    </div>
  );
}
