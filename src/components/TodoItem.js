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
  const placeholder = props.placeholder ? props.placeholder : "0min";
  const styles = {
    input: {
      width: "3em"
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        style={styles.input}
        onChange={handleMinutes}
      ></input>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={handleCheck}
      ></input>
      <label>{label}</label>
    </div>
  );
}
