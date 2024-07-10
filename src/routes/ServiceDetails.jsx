import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../services/apiCart";
import { useQueryClient } from "@tanstack/react-query";
import vector88 from "../Assets/images/vector88.png";
import useServiceDetails from "../features/services/useServiceDetails";
import ServiceSlider from "../ui/ServiceSlider";
import ServiceOwnerCard from "../ui/cards/ServiceOwnerCard";
import UserServiceCard from "./../ui/cards/UserServiceCard";
import RateCard from "../ui/cards/RateCard";
import useGetRates from "../features/services/useGetRates";
import useCartList from "../features/cart/useCartList";
import { updateEntireCart } from "../redux/slices/cart";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: rates } = useGetRates();
  const { data: service } = useServiceDetails();
  const [inCart, setInCart] = useState(false);
  const cart = useSelector((state) => state.cart.cartList);
  const isLogged = useSelector((state) => state.authedUser.isLogged);
  const queryClient = useQueryClient();
  const { data: cartQuery } = useCartList();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateEntireCart(
        cartQuery?.data?.map((item) => ({
          id: item.id,
          service_id: item.service?.id,
          quantity: item.quantity,
          developments: item?.service?.developments?.map(
            (dev) => dev.in_cart && dev.id
          )
        }))
      )
    );
  }, [cartQuery]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartObj, setCartObj] = useState({
    service_id: service?.id,
    quantity: 1,
    developments: []
  });

  useEffect(() => {
    if (cart && service) {
      const itemFromCart = cart.find((item) => item.service_id === service.id);
      let developmentsTotalPrice = 0;
      if (itemFromCart && itemFromCart.developments.length > 0) {
        developmentsTotalPrice = itemFromCart.developments.reduce(
          (acc, devId) => {
            const development = service.developments.find(
              (dev) => dev.id === devId
            );
            return acc + development.price;
          },
          0
        );
        setInCart(true);
      }
      setCartObj({
        service_id: service.id,
        quantity: itemFromCart ? itemFromCart.quantity : 1,
        developments: itemFromCart
          ? itemFromCart.developments.map((dev) => dev.id)
          : []
      });
      setTotalPrice(
        (itemFromCart
          ? itemFromCart?.quantity * service.price
          : service?.price) + developmentsTotalPrice
      );
    }
  }, [cart, service]);

  const handleIncreaseQuantity = () => {
    setCartObj((prevCartObj) => ({
      ...prevCartObj,
      quantity: prevCartObj.quantity + 1
    }));
    setTotalPrice((prevTotalPrice) => prevTotalPrice + service?.price);
  };

  const handleDecreaseQuantity = () => {
    if (cartObj.quantity > 1) {
      setCartObj((prevCartObj) => ({
        ...prevCartObj,
        quantity: prevCartObj.quantity - 1
      }));
      setTotalPrice((prevTotalPrice) => prevTotalPrice - service?.price);
    }
  };

  const handleCheckboxChange = (id) => {
    if (cartObj.developments.includes(id)) {
      setCartObj({
        ...cartObj,
        developments: cartObj.developments.filter((item) => item !== id)
      });
      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice -
          service?.developments?.find((item) => item?.id === id)?.price
      );
    } else {
      setCartObj({
        ...cartObj,
        developments: [...cartObj.developments, id]
      });
      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice +
          service?.developments?.find((item) => item?.id === id)?.price
      );
    }
  };

  const handleAddToCart = async () => {
    if (!isLogged) {
      navigate("/login");
    } else {
      await addToCart(cartObj, queryClient);
      navigate("/cart");
    }
  };

  return (
    <section className="service-details container">
      <div className="row">
        <div className="col-lg-7 col-12 p-2">
          <div className="service-content">
            <ServiceSlider images={service?.images} />
            <div className="content">
              <ServiceOwnerCard service={service} />
              <h4>{service?.title}</h4>
              <p>
                <Link to={`/search?categories=${service?.category?.id}`}>
                  {service?.category?.name}
                </Link>{" "}
                /{" "}
                <Link to={`/search?sub_categories=${service?.sub_category_id}`}>
                  {service?.sub_category?.name}
                </Link>
              </p>
              <p>{service?.description}</p>

              {/* developments */}
              {service?.developments && service?.developments.length > 0 && (
                <div className="more-develop">
                  <h6>
                    <img src={vector88} alt="icon" />{" "}
                    {t("services.developmentsAvailable")}
                  </h6>
                  {service?.developments.map((development) => (
                    <div
                      className="d-flex input-field align-items-baseline"
                      key={development?.id}
                    >
                      <input
                        type="checkbox"
                        id={`check-${development.id}`}
                        name={`check-${development.id}`}
                        checked={
                          cartObj.developments?.find(
                            (id) => id === development.id
                          )
                            ? true
                            : false
                        }
                        onChange={() => handleCheckboxChange(development.id)}
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

              {/* add to cart */}
              <div className="add-cart">
                <div className="input-field">
                  <button className="add" onClick={handleIncreaseQuantity}>
                    <i className="fa-regular fa-plus"></i>
                  </button>

                  <input
                    type="number"
                    min={1}
                    readOnly
                    value={cartObj.quantity}
                    onChange={(e) =>
                      setCartObj({ ...cartObj, quantity: e.target.value })
                    }
                  />

                  <button className="minus" onClick={handleDecreaseQuantity}>
                    <i className="fa-regular fa-minus"></i>
                  </button>
                </div>

                <div className="total d-flex justify-content-between align-items-center">
                  <p>
                    {t("services.total")} : <br />
                    {cartObj.developments.length > 0 && (
                      <span>
                        + <span id="num">{cartObj.developments.length}</span>{" "}
                        {t("services.extraService")}
                      </span>
                    )}
                  </p>
                  <h6>
                    {totalPrice}
                    <i className="fa-solid fa-dollar-sign"></i>
                  </h6>
                </div>
                {!inCart && (
                  <button className="request-order" onClick={handleAddToCart}>
                    <i className="fa-regular fa-cart-plus"></i>{" "}
                    {t("services.addToCart")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 p-2">
          <UserServiceCard service={service} />
          <div className="rating-cards-container">
            {rates?.data?.map((rate) => (
              <RateCard key={rate?.id} rate={rate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
