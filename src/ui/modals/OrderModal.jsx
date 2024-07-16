import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import { createOrder } from "../../services/apiOrders";
import { toast } from "react-toastify";
import SubmitButton from "../form-elements/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const OrderModal = ({ showModal, setShowModal, ballance, cartTotalPrice }) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../../Assets/lotties/wallet.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
      await createOrder(queryClient);
      toast.success(t("cart.orderSuccess"));
      setShowModal(false);
      navigate("/purchases");
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
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
        <div className="d-flex justify-content-end gap-3 mt-4">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          <SubmitButton
            name={t("services.orderNow")}
            loading={loading}
            onClick={handlePlaceOrder}
            className={"order-now"}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
