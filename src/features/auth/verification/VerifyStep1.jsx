import React from "react";
import { Link } from "react-router-dom";

const VerifyStep1 = () => {
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
              {/*<!-- wizard step --> */}

              <fieldset>
                <div className="form-card">
                  <div className="input-field">
                    <label for="phone">
                      <i className="ti ti-md ti-device-mobile"></i> رقم الهاتف
                    </label>

                    <div
                      className="inputs"
                      style={{ direction: "rtl !important;" }}
                    >
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="0XXXXXXXXXX"
                      />
                      <input
                        type="text"
                        id="phoneField1"
                        name="countryPicker"
                        className="country-picker"
                      />
                    </div>
                  </div>
                  <Link to="/VerifyStep2">
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="التالي"
                    />
                  </Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyStep1;
