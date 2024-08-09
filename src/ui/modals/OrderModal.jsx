import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import SubmitButton from "../form-elements/SubmitButton";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const OrderModal = ({
  showModal,
  setShowModal,
  ballance,
  cartTotalPrice,
  eventFunction,
  loading,
  chargeBallance
}) => {
  const { t } = useTranslation();

  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../Assets/lotties/wallet.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header className="pb-0" closeButton />
      <Modal.Body className="pay_modal">
        <div className="current_ballance">
          <Lottie
            options={defaultOptions}
            height={150}
            width={150}
            className="icon"
          />
        </div>
        {ballance >= cartTotalPrice ? (
          <>
            <h3>
              {t("cart.currentBallance")}:{" "}
              <span>
                {ballance}
                <i className="fa-solid fa-dollar-sign"></i>
              </span>
            </h3>
            <h3>
              {t("cart.valueWillbediscountedfromyourballance")}{" "}
              <span>
                {cartTotalPrice}
                <i className="fa-solid fa-dollar-sign"></i>
              </span>{" "}
              {t("cart.fromYourWallet")}
            </h3>
          </>
        ) : (
          <h3>
            {t("cart.youDontHaveEnoughBallance")}{" "}
            <span>
              {cartTotalPrice}
              <i className="fa-solid fa-dollar-sign"></i>
            </span>
          </h3>
        )}

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          {ballance >= cartTotalPrice ? (
            <SubmitButton
              name={t("services.orderNow")}
              loading={loading}
              onClick={eventFunction}
              className="order-now"
            />
          ) : (
            <Link
              className="order-now text-center"
              to={`http://api.ynjez.com/payment/${cartTotalPrice}?Authorization=${token}`}
              target="_blank"
            >
              {t("cart.chargeWallet")}
            </Link>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
