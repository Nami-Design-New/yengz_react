import React from "react";
import success from "../../../Assets/images/success.svg";
import { Link } from "react-router-dom";

const VerifyStep5 = () => {
  return (
    <section className="login-section container">
      <h1 className="text-center">توثيق الحساب</h1>
      <p className="text-center mt-3 title">
        مرحبا بك …! ادخل جميع البيانات المطلوبة لإتمام عمليه توثيق الحساب.
      </p>

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
                {/*<!-- wizard finish step --> */}

                <fieldset>
                  <div className="form-card">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <img src={success} className="fit-image" />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-10 text-center">
                        <h5 className="purple-text text-center">
                          تم ارسال بياناتك بنجاح وجاري مراجعتها حالياً , سيتم
                          اخطارك علي البريد الالكتروني المسجل لدينا
                        </h5>
                        <Link to="/">
                          الرئيسية <i className="fa-solid fa-angle-left"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyStep5;
