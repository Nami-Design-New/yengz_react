import React, { useState } from "react";
import { Modal, Nav, Row, Tab } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import InputField from "../form-elements/InputField";
import useBanksList from "../../features/Banks/useBanksList";
import BankTransferCard from "../cards/BankTransferCard";

const WithdrawModal = ({ showModal, setShowModal, cartTotalPrice }) => {
  const { t } = useTranslation();
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;
  const { data: banks } = useBanksList();
  const [formData, setFormData] = useState({
    amount: "",
    paypal: "",
    bank_id: "",
  });
  const [conditionsCheck, setConditionsCheck] = useState({
    responsibility: false,
    duration: false,
    fees: false,
  });

  const handleChange = (e) => {
    console.log(e.target);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConditionsChange = (e) => {
    setConditionsCheck({
      ...conditionsCheck,
      [e.target.name]: e.target.checked,
    });
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
                  <i className="fa-sharp fa-regular fa-building-columns"></i>
                  {t("balance.bankTransfer")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="paypal">
                  <i className="fa-brands fa-paypal"></i>
                  Paypal
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="bankTransfer">
                <form className="form">
                  <InputField
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder={"00"}
                    value={formData.amount}
                    label={`${t("balance.amount")} *`}
                    onChange={handleChange}
                  />

                  {banks &&
                    banks?.length > 0 &&
                    banks.map((bank) => (
                      <BankTransferCard
                        key={bank.id}
                        bank={bank}
                        bankTransfer={formData.bank_id}
                        onChange={handleChange}
                      />
                    ))}

                  <Link to="/manage-accounts" className="btn">
                    {t("manageAccount")}
                  </Link>

                  <div className="conditions-wrapper">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        name="fees"
                        id="fees"
                        checked={conditionsCheck.fees}
                        onChange={handleConditionsChange}
                      />

                      <label htmlFor="fees">{t("balance.feesCondition")}</label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        name="duration"
                        id="duration"
                        checked={conditionsCheck.duration}
                        onChange={handleConditionsChange}
                      />
                      <label htmlFor="duration">
                        {t("balance.durationCondition")}
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        name="responsibility"
                        id="responsibility"
                        checked={conditionsCheck.responsibility}
                        onChange={handleConditionsChange}
                      />
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
                    id="amount"
                    name="amount"
                    placeholder={"00"}
                    value={formData.amount}
                    label={`${t("balance.amount")} *`}
                    onChange={handleChange}
                  />
                  <InputField
                    type="number"
                    id="paypal"
                    name="paypal"
                    placeholder={"001321913231"}
                    value={formData.paypal}
                    label={`${t("balance.paypalAccount")} *`}
                    onChange={handleChange}
                  />
                  <div className="conditions-wrapper">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        name="fees"
                        id="fees"
                        checked={conditionsCheck.fees}
                        onChange={handleConditionsChange}
                      />

                      <label htmlFor="fees">{t("balance.feesCondition")}</label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        name="duration"
                        id="duration"
                        checked={conditionsCheck.duration}
                        onChange={handleConditionsChange}
                      />
                      <label htmlFor="duration">
                        {t("balance.durationCondition")}
                      </label>
                    </div>
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        name="responsibility"
                        id="responsibility"
                        checked={conditionsCheck.responsibility}
                        onChange={handleConditionsChange}
                      />
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
            </Tab.Content>
          </Row>
        </Tab.Container>

        <div className="d-flex justify-content-end gap-3">
          <button onClick={() => setShowModal(false)} className="cancel-btn">
            {t("cancel")}
          </button>
          <button className="order-now text-center" type="submit">
            {t("balance.withdrawBalance")}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WithdrawModal;
