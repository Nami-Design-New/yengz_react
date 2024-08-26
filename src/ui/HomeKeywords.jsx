import { useState } from "react";
import ChooseCategoryPath from "./modals/ChooseCategoryPath";

function HomeKeywords({ categories }) {
  const [targetedCategory, setTargetedCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="words">
        {categories?.map((category) => (
          <span
            key={category?.id}
            className="word"
            onClick={() => {
              setShowModal(true);
              setTargetedCategory(category);
            }}
          >
            {category?.name}
          </span>
        ))}
      </div>
      <ChooseCategoryPath
        category={targetedCategory}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

export default HomeKeywords;
