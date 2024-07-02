import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const MultiSelect = ({ label, formData, setFormData, options, ...props }) => {
  const selectedOptions = formData?.categories?.map((category) => ({
    value: category.id,
    label: category.name
  }));

  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions?.map((option) => option.value)
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
        value={selectedOptions}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default MultiSelect;
