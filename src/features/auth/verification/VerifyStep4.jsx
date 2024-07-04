import React from "react";
import male from "../../../Assets/images/male.svg";
import female from "../../../Assets/images/female.svg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const VerifyStep4 = () => {
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
              {/*STEP 4 */}
              <fieldset>
                <div className="form-card">
                  <div className="input-field">
                    <label htmlFor="name">
                      <i className="ti ti-md ti-user"></i> الاسم كما هو في
                      الهوية
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="مثال : محمد خالد محمود"
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="country">
                      <i className="ti ti-md ti-flag"></i> الدولة
                    </label>
                    <Form.Select aria-label="الدولة">
                      <option></option>
                      <option value="1">Algeria (‫الجزائر‬‎)</option>
                      <option value="2">Egypt (‫مصر‬‎)</option>
                      <option value="3">
                        Saudi Arabia (‫المملكة العربية السعودية‬‎)
                      </option>
                      <option value="4">American Samoa</option>
                      <option value="5">Afghanistan (‫افغانستان‬‎)</option>
                      <option value="6">Bahrain (‫البحرين‬‎)</option>
                    </Form.Select>
                  </div>

                  <div className="input-field">
                    <label htmlFor="birth">
                      <i className="fa-solid fa-calendar"></i> تاريخ الميلاد
                    </label>
                    <input
                      type="date"
                      id="birth"
                      name="birth"
                      placeholder="15 / 06 / 2023"
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="gender">
                      <i className="fa-solid fa-venus-mars"></i> النوع
                    </label>
                    <div className="inputs">
                      <label htmlFor="male">
                        <div className="gender">
                          <img src={male} alt="male" />
                          ذكر
                        </div>
                        <input type="radio" name="gender" id="male" />
                      </label>
                      <label htmlFor="female">
                        <div className="gender">
                          <img src={female} alt="female" />
                          انثى
                        </div>
                        <input type="radio" name="gender" id="female" />
                      </label>
                    </div>
                  </div>
                </div>

                <Link to="/VerifyStep5">
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="التالي"
                  />
                </Link>

                <Link to="/VerifyStep3"></Link>
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

export default VerifyStep4;
