function CheckBoxFilterItem({ name, subTitle }) {
  return (
    <div className="department-header">
      <label className="dep_name" htmlFor={subTitle}>
        {subTitle}
      </label>
      <input type="checkbox" name={name} value={subTitle} id={subTitle} />
    </div>
  );
}

export default CheckBoxFilterItem;
