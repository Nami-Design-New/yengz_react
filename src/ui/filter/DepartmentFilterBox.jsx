import CheckBoxContainer from "./CheckBoxContainer";

function DepartmentFilterBox({
  categoriesValue,
  sub_categoriesValue,
  onChange,
  departmentFilter,
}) {
  return (
    <div className="departments">
      {departmentFilter.length > 0 && (
        <>
          <h6>القسم</h6>
          <ul className="deps">
            {departmentFilter.map((item) => (
              <CheckBoxContainer
                key={item.id}
                item={item}
                categoriesValue={categoriesValue}
                sub_categoriesValue={sub_categoriesValue}
                onChange={onChange}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DepartmentFilterBox;
