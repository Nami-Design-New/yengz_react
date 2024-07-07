import { useTranslation } from "react-i18next";
import CheckBoxContainer from "./CheckBoxContainer";
import useCategorieListWithSub from "../../features/categories/useCategorieListWithSub";

function DepartmentFilterBox({
  categoriesValue,
  sub_categoriesValue,
  onChange,
}) {
  const { t } = useTranslation();
  const { data } = useCategorieListWithSub();


  return (
    <div className="departments">
      {data && data.length > 0 && (
        <>
          <h6>{t("search.category")}</h6>
          <ul className="deps">
            {data.map((item) => (
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
