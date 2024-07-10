import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CartBox from "../ui/cart/CartBox";
import useCartList from "../features/cart/useCartList";
import emptyCart from "../Assets/images/emptyCart.svg";

const Cart = () => {
  const { data: cart } = useCartList();
  const { t } = useTranslation();

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
