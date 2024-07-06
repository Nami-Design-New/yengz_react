import React from "react";

const WizardStep3 = () => {
  return (
    <fieldset>
      <div className="form-card">
        <div className="input-field">
          <label htmlFor="info-htmlFor-customer">
            <div className="d-flex justify-content-between align-items-center">
              <span>تعليمات للمشتري</span>
              <i
                className="info-label fa-light fa-circle-info"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="المعلومات التي تحتاجها من المشتري لتنفيذ الخدمة. تظهر هذه المعلومات بعد شراء الخدمة فقط."
              ></i>
            </div>
          </label>
          <textarea
            name="info-htmlFor-customer"
            id="info-htmlFor-customer"
            placeholder="اكتب هنا"
          ></textarea>
        </div>
        <div className="input-field">
          <label htmlFor="add-more-devlop">
            <div className="d-flex justify-content-between align-items-center">
              <span>أضف تطويراً لهذه الخدمة</span>
              <i
                className="info-label fa-light fa-circle-info"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="تطويرات الخدمة المقدمة اختيارية فقط ولا يمكن أن تجبر المشتري على طلبها"
              ></i>
            </div>
          </label>
          <input id="addBtn" type="button" value="أضف تطويراً لهذه الخدمة" />
        </div>
        <div id="add-cards-container"></div>
      </div>
      <input
        type="button"
        name="next"
        className="next action-button"
        value="تأكيد واضافة"
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

export default WizardStep3;
