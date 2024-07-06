import React from "react";

const WizardStep4 = () => {
  return (
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
              تم ارسال الخدمة بنجاح وجاري مراجعتها حالياً
            </h5>
            <Link to="/profile">
              حسابي <i className="fa-solid fa-angle-left"></i>
            </Link>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default WizardStep4;
