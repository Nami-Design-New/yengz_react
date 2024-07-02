import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const MultiSelect = ({ label, formData, setFormData, options, ...props }) => {
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData({
      ...formData,
      categories: selectedValues
    });
  };

  return (
    <div className="input-field">
      <label htmlFor={props.id}>{label}</label>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default MultiSelect;
