import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CartBox from "../ui/cart/CartBox";
import useCartList from "../features/cart/useCartList";
import emptyCart from "../Assets/images/emptyCart.svg";
import { useDispatch } from "react-redux";
import { updateEntireCart } from "../redux/slices/cart";
import { deleteCart } from "../services/apiCart";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Cart = () => {
  const { data: cart } = useCartList();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  dispatch(
    updateEntireCart(
      cart?.data?.map((item) => ({
        id: item.id,
        service_id: item.service?.id,
        quantity: item.quantity,
        developments: item?.service?.developments?.map(
          (dev) => dev.in_cart && dev.id
        )
      }))
    )
  );

  const queryClient = useQueryClient();
  const handleDelete = async () => {
    try {
      await deleteCart(queryClient);
      toast.success(t("cart.cartDelted"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <section className="cart-section container">
        <div className="row">
          {cart?.data && cart?.data?.length === 0 ? (
            <div className="col-12 p-2">
              <div className="empty_cart">
                <img src={emptyCart} alt="empty-cart" />
                <h3>{t("cart.empty")}</h3>
                <Link to="/search">{t("cart.exploreServices")}</Link>
              </div>
            </div>
          ) : (
            <div className="col-12 p-2">
              {cart?.data?.map((item) => (
                <CartBox item={item} key={item.id} />
              ))}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-12">
                    <Link className="order-now" to="/checkout">
                      {t("services.orderNow")}
                    </Link>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <button onClick={handleDelete} className="order-now delete">
                      {t("cart.deleteCart")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
