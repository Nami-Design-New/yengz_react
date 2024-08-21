import React, { useState } from "react";
import { Modal, Nav, Row, Tab } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import InputField from "../form-elements/InputField";

const WithdrawModal = ({ showModal, setShowModal, cartTotalPrice }) => {
  const { t } = useTranslation();
  const [transferAmountValue, setTransferAmountValue] = useState("");
  const [paypalAmountValue, setPaypalAmountValue] = useState("");
  const [selectedBankTransfer, setSelectedBankTransfer] = useState("");
  const [paypalAccount, setPaypalAccount] = useState("");
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;

  const handleBankTransferChange = (event) => {
    setSelectedBankTransfer(event.target.id);
  };

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
                    id="transferAmountValue"
                    name="transferAmountValue"
                    placeholder={"00"}
                    value={transferAmountValue}
                    label={`${t("balance.amount")} *`}
                    onChange={(e) => setTransferAmountValue(e.target.value)}
                  />

                  <div className="bank-transfer-box">
                    <input
                      type="radio"
                      name="bank-transfer"
                      id="ahmed-elsayed"
                      checked={selectedBankTransfer === "ahmed-elsayed"}
                      onChange={handleBankTransferChange}
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
                      checked={selectedBankTransfer === "ahmed-abdelghany"}
                      onChange={handleBankTransferChange}
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

                  <div className="conditions-wrapper">
                    <div className="checkbox-group">
                      <input type="checkbox" name="" id="fees" />
                      <label htmlFor="fees">{t("balance.feesCondition")}</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" name="" id="duration" />
                      <label htmlFor="duration">
                        {t("balance.durationCondition")}
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" name="" id="responsibility" />
                      <label htmlFor="responsibility">
                        {t("balance.responsibilityCondition")}
                      </label>
                    </div>
                    <p className="condition-note">
                      الحوالات البنكية التي ترسلها دولية، وحسب البنك الذي تتعامل
                      معه. قد تمر الحوالة عبر بنك وسيط لاتمام التحويل مما يؤدي
                      لاقتطاع رسوم إضافية.
                    </p>
                    <p className="condition-note">
                      قد يقتطع البنك المحلي الذي تستخدمه رسوم إضافية لاستقبال
                      حوالات بنكية دولية أو رسوم لتحويل العملة من الدولار إلى
                      العملة المحلية.
                    </p>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="paypal">
                <form className="form">
                  <InputField
                    type="number"
                    id="paypalAmountValue"
                    name="paypalAmountValue"
                    placeholder={"00"}
                    value={paypalAmountValue}
                    label={`${t("balance.amount")} *`}
                    onChange={(e) => setPaypalAmountValue(e.target.value)}
                  />
                  <InputField
                    type="number"
                    id="paypalAccount"
                    name="paypalAccount"
                    placeholder={"001321913231"}
                    value={paypalAccount}
                    label={`${t("balance.paypalAccount")} *`}
                    onChange={(e) => setPaypalAccount(e.target.value)}
                  />
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>

        <div className="d-flex justify-content-end gap-3">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          <Link
            className="order-now text-center"
            to={
              transferAmountValue === 0 || transferAmountValue === ""
                ? ""
                : `https://api.ynjez.com/payment/${transferAmountValue}?Authorization=${token}&Redirect_url=${window.location.href}`
            }
          >
            {t("balance.withdrawBalance")}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WithdrawModal;
