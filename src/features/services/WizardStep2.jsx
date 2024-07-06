import React from "react";

const WizardStep2 = () => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="input-field">
          <label htmlFor="info-htmlFor-customer">
            <div className="d-flex justify-content-between align-items-center">
              <span>معرض الخدمة</span>
              <i
                className="info-label fa-light fa-circle-info"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="أضف صورة معبرة عن الخدمة بالإضافة إلى ثلاثة نماذج حصرية على الأقل تعرّف المشتري من خلالها على أسلوبك في العمل ومهاراتك."
              ></i>
            </div>
            <small>
              القياس: 343x257 بكسل . بنسبة 4:3 . الحجم الأقصى: 5 ميجا. العدد
              المسموح: 10 ملفات.
            </small>
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
          <label htmlFor="service-main-type">سعر الخدمة</label>
          <div className="selcet-wrap">
            <select
              className="form-select form-select-lg mb-3"
              id="service-main-type"
            >
              <option selected>5.00 $</option>
              <option value="1">10.00 $</option>
              <option value="2">20.00 $</option>
              <option value="3">30.00 $</option>
            </select>
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="service-name">
            <div className="d-flex justify-content-between align-items-center">
              <span>مدة التسليم</span>
              <i
                className="info-label fa-light fa-circle-info"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="يحق للمشتري إلغاء الخدمة مباشرة بحال التأخر عن الموعد المحدد."
              ></i>
            </div>
          </label>
          <div className="selcet-wrap">
            <select
              className="form-select form-select-lg mb-3"
              id="service-main-type"
            >
              <option selected>اختر</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="التالي"
      />
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="السابق"
      />
    </fieldset>
  );
};

export default WizardStep2;
