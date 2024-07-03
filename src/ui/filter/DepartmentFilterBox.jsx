import { useEffect, useState } from "react";
import CheckBoxContainer from "./CheckBoxContainer";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.get("categories");
  const [activeAccordion, setActiveAccordion] = useState([]);

  useEffect(() => {
    if (searchParams.get("categories")) {
      setActiveAccordion([+searchParams.get("categories")]);
    }
  }, [searchParams]);

  function handleActiveAccordionState(e, id, type) {
    const parentId = id.toString().split("-")[0];
    const parent = departmentFilter.find(
      (item) => item.id.toString() === parentId
    );
    const childIds = parent.subTitles.map(
      (subTitle) => `${parentId}-${subTitle}`
    );

    if (type === "parent") {
      if (activeAccordion.includes(id)) {
        setActiveAccordion(
          activeAccordion.filter(
            (item) => item !== id && !childIds.includes(item)
          )
        );
      } else {
        setActiveAccordion([...activeAccordion, id, ...childIds]);
      }
    } else if (type === "child") {
      if (activeAccordion.includes(id)) {
        setActiveAccordion(activeAccordion.filter((item) => item !== id));
      } else {
        setActiveAccordion([...activeAccordion, id]);
      }

      if (
        childIds.every(
          (childId) => activeAccordion.includes(childId) || childId === id
        )
      ) {
        setActiveAccordion((prev) => [...prev, parentId]);
      } else if (activeAccordion.includes(parentId)) {
        setActiveAccordion((prev) => prev.filter((item) => item !== parentId));
      }
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
                key={item.id}
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
