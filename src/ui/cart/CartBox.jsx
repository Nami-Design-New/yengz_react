import { IconTrashFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  decreaseCartQuantity,
  deleteCart,
  deleteCartItem,
  increaseCartQuantity
} from "../../services/apiCart";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function CartBox({ item }) {
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [formLoading, setFormLoading] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    const developmentsPrice = item?.service?.developments
      ?.filter((dev) => dev.in_cart)
      .reduce((acc, dev) => acc + dev.price, 0);
    setTotalPrice(item?.quantity * item?.service?.price + developmentsPrice);
  }, [item]);

  const handleDeleteItem = async (id) => {
    try {
      await deleteCart(id, queryClient);
      toast.success(t("cart.deleteSuccess"));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBox = async (id) => {
    try {
      await deleteCartItem(id, queryClient);
      toast.success(t("cart.deleteSuccess"));
    } catch (error) {
      console.error(error);
    }
  };

  const increaseItemQuantity = async (id) => {
    try {
      setFormLoading(true);
      await increaseCartQuantity(id, queryClient);
    } catch (error) {
      console.error(error);
    } finally {
      setFormLoading(false);
    }
  };

  const decreaseItemQuantity = async (id) => {
    try {
      setFormLoading(true);
      await decreaseCartQuantity(id, queryClient);
    } catch (error) {
      console.error(error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="service container">
      <div className="row">
        <div className="col-lg-7 col-12">
          <div className="service-head">
            <Link to={`/service/${item?.service?.id}`} className="img">
              <img src={item?.service?.image} alt="service" />
            </Link>
            <div className="title">
              <h5>{item?.service?.title}</h5>
              <div className="owner">
                <div className="owner-avatar">
                  {/* <img src={item?.user.image} alt="owner" /> */}
                </div>
                {/* <span>{item?.user.name}</span> */}
              </div>
            </div>
          </div>
          <div className="more-develop">
            {item?.service?.developments &&
              item?.service?.developments.length > 0 && (
                <div className="more-develop">
                  {item?.service?.developments.map((development) => (
                    <div
                      className="d-flex input-field align-items-baseline"
                      key={development?.id}
                    >
                      <input
                        type="checkbox"
                        id={`check-${development.id}`}
                        name={`check-${development.id}`}
                        checked={development?.in_cart}
                        // onChange={() => handleCheckboxChange(development.id)}
                      />
                      <div className="label">
                        <label htmlFor={`check-${development.id}`}>
                          {development.description}
                        </label>
                        <p>
                          {t("services.compare")} {development.price}${" "}
                          {t("services.percentageofExtraService")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div className="add-cart">
            <div className="input-field">
              <button
                className="add"
                disabled={formLoading}
                onClick={() => increaseItemQuantity(item?.id)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              <input type="number" min={1} readOnly value={item?.quantity} />
              <button
                className="minus"
                disabled={formLoading}
                onClick={() => decreaseItemQuantity(item?.id)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
            <div className="total d-flex justify-content-between align-items-center">
              <p>
                {t("services.total")} : <br />
                {item?.service?.developments?.filter((e) => e.in_cart).length >
                  0 && (
                  <span>
                    +{" "}
                    <span id="num">
                      {
                        item?.service?.developments.filter((e) => e.in_cart)
                          .length
                      }
                    </span>{" "}
                    {t("services.extraService")}
                  </span>
                )}
              </p>
              <div className="d-flex gap-3 align-items-center">
                <h6 className="mb-0">
                  {totalPrice}
                  <i className="fa-solid fa-dollar-sign"></i>
                </h6>
                <button
                  className="delete_btn"
                  onClick={() => handleDeleteBox(item?.id)}
                  disabled={formLoading}
                >
                  <IconTrashFilled />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBox;
