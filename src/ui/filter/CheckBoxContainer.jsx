import CheckBoxFilterItem from "./CheckBoxFilterItem";

function CheckBoxContainer({ item, activeAccordion, onChange }) {
  return (
    <li className="department-item">
      <div className="department-header">
        <label htmlFor={item.title}>
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
          checked={activeAccordion.includes(+item.id)}
          onChange={onChange}
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
                name={item.title}
                subTitle={subTitle}
                key={subTitle}
              />
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

export default CheckBoxContainer;
