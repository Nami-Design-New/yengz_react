import React from "react";
import id from "../../../Assets/images/id.svg";
import fileup1 from "../../../Assets/images/fileup1.svg";
import { Link } from "react-router-dom";

const VerifyStep3 = () => {
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

              {/*<!-- wizard step 3 --> */}

              <fieldset>
                <div className="form-card">
                  <div className="advice">
                    <div className="icon">
                      <img src={id} alt="icon" />
                    </div>
                    <h6>يرجى ارفاق بطاقة الهوية الوطنية والتأكد من أنها:</h6>
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i> مضيئة بشكل جيد
                        وواضحة للقراءة
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> موضوعة داخل الإطار
                        وغير مقصوصة
                      </li>
                    </ul>
                  </div>
                  <div className="input-field">
                    <label>
                      <i className="fa-solid fa-id-card"></i> صورة الجهة
                      الأمامية للهوية الوطنية
                    </label>
                    <label className="img-upload">
                      <img src={fileup1} alt="icon" />
                      <input
                        name="front-id-img"
                        id="img-upload-front"
                        accept="image/*"
                        type="file"
                      />
                    </label>
                  </div>
                  <div className="input-field">
                    <label>
                      <i className="fa-solid fa-id-card"></i> صورة الجهة الخلفية
                      للهوية الوطنية
                    </label>
                    <label className="img-upload">
                      <img src={fileup1} alt="icon" />
                      <input
                        name="back-id-img"
                        id="img-upload-back"
                        accept="image/*"
                        type="file"
                      />
                    </label>
                  </div>
                  <div className="input-field">
                    <label>
                      <i className="fa-solid fa-id-card-clip"></i> صورتك مع
                      الهوية الوطنية
                    </label>
                    <label className="img-upload">
                      <img src={fileup1} alt="icon" />
                      <input
                        name="front-id-img"
                        id="img-upload-id-with-user"
                        accept="image/*"
                        type="file"
                      />
                    </label>
                  </div>
                </div>
                <Link to="/VerifyStep4">
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

export default VerifyStep3;
