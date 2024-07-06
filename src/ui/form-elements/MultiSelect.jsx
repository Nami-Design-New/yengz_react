import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const MultiSelect = ({
  label,
  options,
  selectedOptions,
  handleChange,
  ...props
}) => {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default MultiSelect;
