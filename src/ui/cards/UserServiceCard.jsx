import { useTranslation } from "react-i18next";

function UserServiceCard({ data }) {
  const { t } = useTranslation();

  return (
    <div className="service-card">
      <div className="label d-flex align-items-center gap-2">
        <i className="fa-regular fa-circle-info"></i>
        <p className="p-0 m-0">{t("services.serviceCart")}</p>
      </div>
      <ul className="card-ul">
        <li className="rate d-flex justify-content-between">
          <p>
            التقييمات{" "}
            {data?.user.customer_count && `(${data?.user.customer_count})`}{" "}
          </p>
          <div className="rate">
            <ul>
              <li className="star">
                <i className="fa-solid fa-star"></i>
              </li>
              <li className="star">
                <i className="fa-solid fa-star"></i>
              </li>
              <li className="star">
                <i className="fa-solid fa-star"></i>
              </li>
              <li className="star">
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
          </div>
        </li>
        <li className=" d-flex justify-content-between">
          <p>{t("services.buyers")}</p>
          <span>135</span>
        </li>
        <li className=" d-flex justify-content-between">
          <p>{t("services.oredersInProgress")}</p>
          <span>{data?.orders_count}</span>
        </li>
        <li className=" d-flex justify-content-between">
          <p>{t("services.serviceMinimumPrice")}</p>
          <span>${data?.price}</span>
        </li>
        <li className=" d-flex justify-content-between">
          <p>{t("services.deliveryTime")}</p>
          <span>{data?.days} يوم</span>
        </li>
      </ul>
    </div>
  );
}

export default UserServiceCard;
