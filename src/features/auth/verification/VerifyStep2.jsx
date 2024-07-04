import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const VerifyStep2 = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-md-10 col-lg-7 text-center p-0 mb-2">
          <div>
            <form id="msform">
              {/* <!-- progressbar -->*/}

              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <br />

              {/*<!-- wizard step2 --> */}
              <fieldset>
                <div className="form-card">
                  <h6 className="text-center">
                    من فضلك ادخل الرمز المرسل الي الرقم
                  </h6>
                  <p className="text-center mt-2"> +9710123456789 </p>
                  <div className="input-field">
                    <div className="otp-container">
                      <input
                        className="otp-input"
                        type="text"
                        maxlength="1"
                        inputmode="numeric"
                        pattern="[0-9]"
                        required
                      />
                      <input
                        className="otp-input"
                        type="text"
                        maxlength="1"
                        inputmode="numeric"
                        pattern="[0-9]"
                        required
                      />
                      <input
                        className="otp-input"
                        type="text"
                        maxlength="1"
                        inputmode="numeric"
                        pattern="[0-9]"
                        required
                      />
                      <input
                        className="otp-input"
                        type="text"
                        maxlength="1"
                        inputmode="numeric"
                        pattern="[0-9]"
                        required
                      />
                      <input
                        className="otp-input"
                        type="text"
                        maxlength="1"
                        inputmode="numeric"
                        pattern="[0-9]"
                        required
                      />
                    </div>
                  </div>
                  <div className="resend-code">
                    <Link to="#!">اعادة ارسال الرمز</Link>
                    <div className="timer">
                      <span>48</span> :<span>00</span>
                    </div>
                  </div>
                </div>
                <Link to="/VerifyStep3">
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="التالي"
                  />
                </Link>

                <Link to="/VerifyStep2"></Link>
                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="السابق"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyStep2;
