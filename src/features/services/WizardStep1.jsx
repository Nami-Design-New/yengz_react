import React from "react";
import { useTranslation } from "react-i18next";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import InputField from "./../../ui/form-elements/InputField";

const WizardStep1 = ({ formData, setFormData, setStep }) => {
  const { t } = useTranslation();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <InputField
        label={t("addService.serviceTitle")}
        placeholder={t("addService.serviceTitlePlaceholder")}
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        toolTipContent={t("addService.titleHint")}
      />

      <div className="input-field">
        <label htmlFor="service-main-type">التصنيف</label>
        <div className="select-wrap">
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
      
      <div className="input-field">
        <label htmlFor="service-secondary-type">التصنيف الفرعي</label>
        <div className="select-wrap">
          <select
            className="form-select form-select-lg mb-3"
            id="service-secondary-type"
          >
            <option selected>اختر</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="service-description">
          <div className="d-flex justify-content-between align-items-center">
            <span>وصف الخدمة</span>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip({
                content:
                  "اكتب وصفًا مميزًا للخدمة بلغة سليمة خالية من الأخطاء، تشرح خلاله ما سيحصل عليه العميل بالتفصيل عند شراء الخدمة."
              })}
            >
              <i className="info-label fa-light fa-circle-info"></i>
            </OverlayTrigger>
          </div>
        </label>
        <textarea name="service-description" placeholder="اكتب هنا"></textarea>
      </div>

      <button className="w-25 mt-4 align-self-end">التالي</button>
    </>
  );
};

export default WizardStep1;
