import React from "react";

export function CompanySelector(props) {
  // TODO: manage state, select the correct json based on dropdown.
  // let selectedJson = jsonFiles.filter(j => j.headline === selectedCompany);
  const handleSelect = event => {
    let selectedJson = props.jsonFiles.filter(j => j.id === event.target.value)[0];
    props.setSelectedJson(selectedJson);
  };

  const style = {
    companySelector: {
      display: "flex",
      width: "100%",
      justifyContent: 'flex-end'    }
  };

  return (
    <div style={style.companySelector}>
      <select onChange={handleSelect}>
        {props.jsonFiles.map((file, i) => {
          return (
            <option value={file.id} key={i}>
              {file.id}
            </option>
          );
        })}
      </select>
    </div>
  );
}
