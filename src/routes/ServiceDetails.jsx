import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  updateDevelopmentsInCart,
} from "../services/apiCart";
import { useQueryClient } from "@tanstack/react-query";
import vector88 from "../Assets/images/vector88.png";
import useServiceDetails from "../features/services/useServiceDetails";
import ServiceSlider from "../ui/ServiceSlider";
import ServiceOwnerCard from "../ui/cards/ServiceOwnerCard";
import UserServiceCard from "./../ui/cards/UserServiceCard";
import RateCard from "../ui/cards/RateCard";
import useGetRates from "../features/services/useGetRates";
import useCartList from "../features/cart/useCartList";
import DataLoader from "./../ui/DataLoader";
import SimilarServices from "./../features/services/SimilarServices";

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
  const [formLoading, setFormLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartObj, setCartObj] = useState({
    service_id: service?.id,
    quantity: 1,
    developments: [],
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleTogglingFilter() {
    setIsFilterOpen((open) => !open);
  }

  useEffect(() => {
    function handleCartChange() {
      dispatch(
        updateEntireCart(
          cartQuery?.data?.map((item) => ({
            id: item.id,
            service_id: item.service?.id,
            quantity: item.quantity,
            developments: item?.service?.developments?.map(
              (dev) => dev.in_cart === false && dev.id
            ),
          }))
        )
      );
    }
  }, [cartQuery, dispatch]);

  useEffect(() => {
    if (cart && service) {
      const itemFromCart = cart?.find(
        (item) => item?.service_id === service?.id
      );
      console.log(itemFromCart);
      let developmentsTotalPrice = 0;
      if (itemFromCart && itemFromCart.developments.length > 0) {
        developmentsTotalPrice = itemFromCart.developments.reduce(
          (acc, devId) => {
            const development = service.developments.find(
              (dev) => dev.id === devId
            );
            return development?.price ? acc + development?.price : acc;
          },
          0
        );
      }
      setCartObj({
        id: itemFromCart?.id,
        service_id: service.id,
        quantity: itemFromCart ? itemFromCart.quantity : 1,
        developments: itemFromCart ? itemFromCart.developments : [],
      });
      setTotalPrice(
        (itemFromCart
          ? itemFromCart?.quantity * service.price
          : service?.price) + developmentsTotalPrice
      );
      if (itemFromCart?.id) {
        setInCart(true);
      }
    }
  }, [cart, service]);

  const handleIncreaseQuantity = async () => {
    if (inCart) {
      try {
        setFormLoading(true);
        await increaseCartQuantity(cartObj?.id, queryClient);
      } catch (error) {
        console.error(error);
      } finally {
        setFormLoading(false);
      }
    } else {
      setCartObj((prevCartObj) => ({
        ...prevCartObj,
        quantity: prevCartObj.quantity + 1,
      }));
    }
    setTotalPrice((prevTotalPrice) => prevTotalPrice + service?.price);
  };

  const handleDecreaseQuantity = async () => {
    if (cartObj.quantity > 1) {
      if (inCart) {
        try {
          setFormLoading(true);
          await decreaseCartQuantity(cartObj?.id, queryClient);
        } catch (error) {
          console.error(error);
        } finally {
          setFormLoading(false);
        }
      } else {
        setCartObj((prevCartObj) => ({
          ...prevCartObj,
          quantity: prevCartObj.quantity - 1,
        }));
        setTotalPrice((prevTotalPrice) => prevTotalPrice - service?.price);
      }
    } else return;
  };

  const handleCheckboxChange = async (id) => {
    if (inCart) {
      try {
        await updateDevelopmentsInCart(
          {
            cart_id: cartObj?.id,
            development_id: id,
          },
          queryClient
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      const isChecked = cartObj.developments.includes(id);
      setCartObj((prevCartObj) => ({
        ...prevCartObj,
        developments: isChecked
          ? prevCartObj.developments.filter((item) => item !== id)
          : [...prevCartObj.developments, id],
      }));
      setTotalPrice((prevTotalPrice) =>
        isChecked
          ? prevTotalPrice -
            service?.developments?.find((item) => item?.id === id)?.price
          : prevTotalPrice +
            service?.developments?.find((item) => item?.id === id)?.price
      );
    }
  };

  // const handleCheckboxChange = (id) => {
  //   setCartObj((prevCartObj) => {
  //     const newDevelopments = prevCartObj.developments.includes(id)
  //       ? prevCartObj.developments.filter((devId) => devId !== id)
  //       : [...prevCartObj.developments, id];

  //     const developmentPrice =
  //       service?.developments?.find((dev) => dev.id === id)?.price || 0;

  //     const newTotalPrice = prevCartObj.developments.includes(id)
  //       ? totalPrice - developmentPrice
  //       : totalPrice + developmentPrice;

  //     setTotalPrice(newTotalPrice);

  //     return {
  //       ...prevCartObj,
  //       developments: newDevelopments,
  //     };
  //   });

  //   dispatch(
  //     updateSpesificItem({
  //       ...cartObj,
  //       developments: cartObj.developments.includes(id)
  //         ? cartObj.developments.filter((devId) => devId !== id)
  //         : [...cartObj.developments, id],
  //     })
  //   );
  // };

  const handleAddToCart = async () => {
    if (!isLogged) {
      navigate("/login");
    } else {
      try {
        await addToCart(cartObj, queryClient);
        navigate("/cart");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <DataLoader />
      ) : (
        <>
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
                      <Link
                        to={`/search?sub_categories=${service?.sub_category_id}`}
                      >
                        {service?.sub_category?.name}
                      </Link>
                    </p>
                    <p>{service?.description}</p>
                    {service?.is_my_service === false && (
                      <>
                        {service?.developments &&
                          service?.developments.length > 0 && (
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
                                    checked={cartObj.developments.includes(
                                      development.id
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(development.id)
                                    }
                                  />
                                  <div className="label">
                                    <label htmlFor={`check-${development.id}`}>
                                      {development.description}
                                    </label>
                                    <p>
                                      {t("services.compare")}{" "}
                                      {development.price}{" "}
                                      {t("services.percentageofExtraService")}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        <div className="add-cart">
                          <div className="input-field">
                            <button
                              className="add"
                              disabled={formLoading}
                              onClick={handleIncreaseQuantity}
                            >
                              <i className="fa-regular fa-plus"></i>
                            </button>

                            <input
                              type="number"
                              min={1}
                              readOnly
                              value={cartObj.quantity}
                              onChange={(e) =>
                                setCartObj({
                                  ...cartObj,
                                  quantity: e.target.value,
                                })
                              }
                            />

                            <button
                              className="minus"
                              onClick={handleDecreaseQuantity}
                            >
                              <i className="fa-regular fa-minus"></i>
                            </button>
                          </div>

                          <div className="total d-flex justify-content-between align-items-center">
                            <p>
                              {t("services.total")} : <br />
                              {cartObj.developments.length > 0 && (
                                <span>
                                  +{" "}
                                  <span id="num">
                                    {cartObj.developments.length}
                                  </span>{" "}
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
                            <button
                              className="request-order"
                              onClick={handleAddToCart}
                            >
                              <i className="fa-regular fa-cart-plus"></i>{" "}
                              {t("services.addToCart")}
                            </button>
                          )}
                        </div>
                      </>
                    )}
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
          <SimilarServices services={service?.similar_services} />
        </>
      )}
    </>
  );
};

export default ServiceDetails;
