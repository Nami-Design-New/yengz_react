import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useCategoriesList from "../../features/categories/useCategoriesList";

const animatedComponents = makeAnimated();

const MultiSelect = ({ label, formData, setFormData, ...props }) => {
  const { data } = useCategoriesList();
  const options = data?.data?.map((category) => ({
    value: category.id,
    label: category.name
  }));

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
