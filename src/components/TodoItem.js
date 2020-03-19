import React, { useState, useEffect } from "react";

export function TodoItem(props) {
  const label = props.label;
  const id = props.id;
  const timeId = props.id.concat("_time");
  const styles = {
    input: {
      width: "4.5em"
    }
  };

  const [checked, setChecked] = useState(localStorage.getItem(id));

  const handleCheck = () => {
    let value = checked === "true" ? "false" : "true";
    localStorage.setItem(id, value);
    setChecked(value);
    console.log("check");
  };

  const handleMinutes = () => {
    // do the thing. Set local storage id = prop.id and do what ever
    console.log("CHANGING MINUTES TO ");
  };

  return (
    <div>
      {props.placeholder && (
        <input
          type="text"
          id={timeId}
          placeholder={props.placeholder}
          style={styles.input}
          onChange={handleMinutes}
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
