import React from "react";

const handleCheck = () => {
  // do the thing. Set local storage id = prop.id and do what ever
  console.log("CHECK");
};

const handleMinutes = () => {
  // do the thing. Set local storage id = prop.id and do what ever
  console.log("CHANGING MINUTES TO ");
};

export function TodoItem(props) {
  const label = props.label;
  const id = props.id;
  const timeId = props.id.concat("_time");
  const styles = {
    input: {
      width: "4.5em"
    }
  };
  return (
    <div>
      {props.placeholder && (
        <input
          type="text"
          placeholder={props.placeholder}
          style={styles.input}
          onChange={handleMinutes}
        ></input>
      )}

      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={handleCheck}
      ></input>
      <label>{label}</label>
    </div>
  );
}
