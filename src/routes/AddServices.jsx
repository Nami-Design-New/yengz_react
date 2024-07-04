import React from "react";
import fileup1 from "../Assets/images/fileup1.svg";
import success from "../Assets/images/success.svg";
import { Link } from "react-router-dom";

const AddServices = () => {
  return (
    <main>
      <section className="add-service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-9 col-md-7 col-lg-7  text-center p-0 mb-2">
              <form id="msform">
                {/*<!-- progressbar -->*/}
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <br />
                {/*<!-- wizard step -->  */}

                <fieldset>
                  <div className="form-card">
                    <div className="input-field">
                      <label htmlFor="service-name">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>عنوان الخدمة</span>
                          <i
                            className="info-label fa-light fa-circle-info"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-title="اختر عنوانًا مختصرًا وواضحًا يعكس ما ستقدمه بالتحديد في خدمتك، ليتمكن المشترين من العثور عليها عند البحث بكلمات ذات صلة بمجال الخدمة."
                          ></i>
                        </div>
                      </label>
                      <input
                        type="text"
                        id="service-name"
                        name="service-name"
                        placeholder="مثال : تصميم وبرمجة مواقع"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="service-main-type">التصنيف</label>
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
                    <div className="input-field">
                      <label htmlFor="service-secondary-type">
                        التصنيف الفرعي
                      </label>
                      <div className="selcet-wrap">
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
                          <i
                            className="info-label fa-light fa-circle-info"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-title="اكتب وصفًا مميزًا للخدمة بلغة سليمة خالية من الأخطاء، تشرح خلاله ما سيحصل عليه العميل بالتفصيل عند شراء الخدمة."
                          ></i>
                        </div>
                      </label>
                      <textarea
                        name="service-description"
                        placeholder="اكتب هنا"
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="التالي"
                  />
                </fieldset>
                {/*<!-- wizard step -->   */}

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
                          القياس: 343x257 بكسل . بنسبة 4:3 . الحجم الأقصى: 5
                          ميجا. العدد المسموح: 10 ملفات.
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
                {/*<!-- wizard step -->  */}

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
                      <input
                        id="addBtn"
                        type="button"
                        value="أضف تطويراً لهذه الخدمة"
                      />
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

                {/*<!-- wizard finish step -->   */}

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
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddServices;
