import { useState } from "react";
import CheckBoxContainer from "./CheckBoxContainer";

const departmentFilter = [
  {
    id: 1,
    title: "برمجة وتطوير",
    subTitles: [
      "لغات البرمجة",
      "خدمات ووردبريس",
      "تطوير متاجر إلكترونية",
      "برمجة تطبيقات الجوال",
    ],
  },
  {
    id: 2,
    title: "تصميم فيديو",
    subTitles: [
      "لغات البرمجة",
      "خدمات ووردبريس",
      "تطوير متاجر إلكترونية",
      "برمجة تطبيقات الجوال",
    ],
  },
  {
    id: 3,
    title: "تعليم عن بعد",
    subTitles: [
      "لغات البرمجة",
      "خدمات ووردبريس",
      "تطوير متاجر إلكترونية",
      "برمجة تطبيقات الجوال",
    ],
  },
  {
    id: 4,
    title: "التسويق الإلكتروني",
    subTitles: [
      "لغات البرمجة",
      "خدمات ووردبريس",
      "تطوير متاجر إلكترونية",
      "برمجة تطبيقات الجوال",
    ],
  },
  {
    id: 5,
    title: "أعمال",
    subTitles: [
      "لغات البرمجة",
      "خدمات ووردبريس",
      "تطوير متاجر إلكترونية",
      "برمجة تطبيقات الجوال",
    ],
  },
];

function DepartmentFilterBox() {
  const [activeAccordion, setActiveAccordion] = useState([]);

  function handleActiveAccordionState(e) {
    const selectedId = Number(e.target.id);
    if (activeAccordion.includes(selectedId)) {
      setActiveAccordion(activeAccordion.filter((id) => +id !== selectedId));
    } else {
      setActiveAccordion([...activeAccordion, selectedId]);
    }
  }

  return (
    <div className="departments">
      {departmentFilter.length > 0 && (
        <>
          <h6>القسم</h6>
          <ul className="deps">
            {departmentFilter.map((item) => (
              <CheckBoxContainer
                key={item.title}
                item={item}
                activeAccordion={activeAccordion}
                onChange={handleActiveAccordionState}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DepartmentFilterBox;
