function CheckBoxFilterItem({ name, subTitle, checked, onChange }) {
  return (
    <div className="department-header">
      <label className="dep_name" htmlFor={subTitle}>
        {subTitle}
      </label>
      <input
        type="checkbox"
        name={name}
        value={subTitle}
        id={subTitle}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckBoxFilterItem;
