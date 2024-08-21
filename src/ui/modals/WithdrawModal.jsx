import React, { useState } from "react";
import { Modal, Nav, Row, Tab } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import InputField from "../form-elements/InputField";

const ChargeModal = ({ showModal, setShowModal, cartTotalPrice }) => {
  const { t } = useTranslation();
  const [chargeValue, setChargeValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header className="pb-0" closeButton>
        <h5>{t("balance.withdrawBalance")}</h5>
      </Modal.Header>
      <Modal.Body className="pay_modal">
        {cartTotalPrice && (
          <h3 className="text-center">
            {t("cart.youDontHaveEnoughBallance")}{" "}
            <span>
              {cartTotalPrice}
              <i className="fa-solid fa-dollar-sign"></i>
            </span>
          </h3>
        )}
        <Tab.Container id="left-tabs-example" defaultActiveKey="bankTransfer">
          <Row>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="bankTransfer">
                  <i class="fa-sharp fa-regular fa-building-columns"></i>
                  {t("balance.bankTransfer")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="paypal">
                  <i class="fa-brands fa-paypal"></i>
                  Paypal
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="bankTransfer">
                <form className="form">
                  <InputField
                    type="number"
                    id="amountValue"
                    name="amountValue"
                    placeholder={"00"}
                    value={amountValue}
                    label={`${t("balance.amount")} *`}
                    onChange={(e) => setAmountValue(e.target.value)}
                  />

                  <div className="bank-transfer-box">
                    <input
                      type="radio"
                      name="bank-transfer"
                      id="ahmed-elsayed"
                    />
                    <label htmlFor="ahmed-elsayed">
                      <div className="image-wrapper">
                        <i class="fa-sharp fa-regular fa-building-columns"></i>
                      </div>
                      <div className="info-wrapper">
                        <h5>Ahmed Elsayed</h5>
                        <div className="info-boxes-wrapper">
                          <div className="info-box">
                            <span className="box-title">IBAN:</span>
                            <span className="box-value">
                              Ah132141937248312321
                            </span>
                          </div>
                          <div className="info-box">
                            <span className="box-title">
                              {t("balance.bankName")}:
                            </span>
                            <span className="box-value">RIYAD BANK</span>
                          </div>
                          <div className="info-box">
                            <span className="box-title">
                              {t("balance.status")}:
                            </span>
                            <span className="box-value">متاح للسحب</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="bank-transfer-box">
                    <input
                      type="radio"
                      name="bank-transfer"
                      id="ahmed-abdelghany"
                    />
                    <label htmlFor="ahmed-abdelghany">
                      <div className="image-wrapper">
                        <i class="fa-sharp fa-regular fa-building-columns"></i>
                      </div>
                      <div className="info-wrapper">
                        <h5>Ahmed Abdelghany</h5>
                        <div className="info-boxes-wrapper">
                          <div className="info-box">
                            <span className="box-title">IBAN:</span>
                            <span className="box-value">
                              Ah132141937248312321
                            </span>
                          </div>
                          <div className="info-box">
                            <span className="box-title">
                              {t("balance.bankName")}:
                            </span>
                            <span className="box-value">RIYAD BANK</span>
                          </div>
                          <div className="info-box">
                            <span className="box-title">
                              {t("balance.status")}:
                            </span>
                            <span className="box-value">متاح للسحب</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <Link to="/manage-accounts" className="btn">
                    {t("manageAccount")}
                  </Link>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="paypal">Paypal tab content</Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          <Link
            className="order-now text-center"
            to={
              chargeValue === 0 || chargeValue === ""
                ? ""
                : `https://api.ynjez.com/payment/${chargeValue}?Authorization=${token}&Redirect_url=${window.location.href}`
            }
          >
            {t("balance.withdrawBalance")}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChargeModal;
