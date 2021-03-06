import React, { useState } from "react";

import "./styles.css";

function AddLocation(props) {
  const { onAdd } = props;

  const [value, setValue] = useState("");

  const handleAdd = () => {
    onAdd(value);
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="add-location">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown} 
        value={value}
        placeholder="Busca un lugar o un CP"
      />
      <button disabled={value === ""} onClick={() => handleAdd()}>
        Buscar
      </button>
    </div>
  );
}

export default AddLocation;
