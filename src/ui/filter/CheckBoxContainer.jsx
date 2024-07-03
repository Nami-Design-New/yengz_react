import CheckBoxFilterItem from "./CheckBoxFilterItem";

function CheckBoxContainer({ item, activeAccordion, onChange }) {
  const isParentChecked = activeAccordion.includes(item.id);
  const areAllChildrenChecked = item.subTitles.every((subTitle) =>
    activeAccordion.includes(`${item.id}-${subTitle}`)
  );

  function handleParentChange(e) {
    onChange(e, item.id, "parent");
  }

  function handleChildChange(e, subTitle) {
    onChange(e, `${item.id}-${subTitle}`, "child");
  }

  return (
    <li className="department-item">
      <div className="department-header">
        <label htmlFor={item.id}>
          {item?.subTitles && (
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#accordion-${item.id}`}
              aria-expanded="true"
              aria-controls={`accordion-${item.id}`}
            >
              <span className="horizontal"></span>
              <span className="vertical"></span>
            </button>
          )}
          {item.title}
        </label>
        <input
          type="checkbox"
          name={item.title}
          value={item.title}
          id={item.id}
          checked={isParentChecked || areAllChildrenChecked}
          onChange={handleParentChange}
        />
      </div>
      {item?.subTitles && (
        <div
          id={`accordion-${item.id}`}
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {item.subTitles.map((subTitle) => (
              <CheckBoxFilterItem
                key={subTitle}
                name={item.title}
                subTitle={subTitle}
                checked={activeAccordion.includes(`${item.id}-${subTitle}`)}
                onChange={(e) => handleChildChange(e, subTitle)}
              />
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

export default CheckBoxContainer;
