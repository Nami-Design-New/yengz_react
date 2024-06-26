import React from "react";
import slider1 from "../Assets/images/slider1.webp";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";

const Blogs = () => {
  return (
    <>
      <main className="main">
        <div className="section-head">
          <SectionHeader />
        </div>
        <section className="blogs">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 colmd-6 col-12 p-2">
                <Link to="/blog_details" className="blog" data-aos="fade-up">
                  <div className="">
                    <img src={slider1} alt="" />
                  </div>
                  <div className="data">
                    <h5 className="title">
                      الدليل النهائي لاختيار الدورة الأونلاين المناسبة
                    </h5>
                    <p className="description">
                      في عصرنا الرقمي اليوم، غيّرت الدورات الأونلاين طريقة
                      تعلّمنا. سواء كنت تبحث عن تطوير مهنتك، اكتساب مهارات
                      جديدة، أو استكشاف اهتمامات شخصية، يمكن أن تكون الكمية
                      الهائلة من الدورات الأونلاين المتاحة مربكة.
                    </p>
                    <div className="date">
                      <i className="fa-duotone fa-calendar-days"></i>
                      18 فبراير 2023
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 colmd-6 col-12 p-2">
                <Link to="/blog_details" className="blog" data-aos="fade-up">
                  <div className="">
                    <img src={slider1} alt="" />
                  </div>
                  <div className="data">
                    <h5 className="title">
                      الدليل النهائي لاختيار الدورة الأونلاين المناسبة
                    </h5>
                    <p className="description">
                      في عصرنا الرقمي اليوم، غيّرت الدورات الأونلاين طريقة
                      تعلّمنا. سواء كنت تبحث عن تطوير مهنتك، اكتساب مهارات
                      جديدة، أو استكشاف اهتمامات شخصية، يمكن أن تكون الكمية
                      الهائلة من الدورات الأونلاين المتاحة مربكة.
                    </p>
                    <div className="date">
                      <i className="fa-duotone fa-calendar-days"></i>
                      18 فبراير 2023
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 colmd-6 col-12 p-2">
                <Link to="/blog_details" className="blog" data-aos="fade-up">
                  <div className="">
                    <img src={slider1} alt="" />
                  </div>
                  <div className="data">
                    <h5 className="title">
                      الدليل النهائي لاختيار الدورة الأونلاين المناسبة
                    </h5>
                    <p className="description">
                      في عصرنا الرقمي اليوم، غيّرت الدورات الأونلاين طريقة
                      تعلّمنا. سواء كنت تبحث عن تطوير مهنتك، اكتساب مهارات
                      جديدة، أو استكشاف اهتمامات شخصية، يمكن أن تكون الكمية
                      الهائلة من الدورات الأونلاين المتاحة مربكة.
                    </p>
                    <div className="date">
                      <i className="fa-duotone fa-calendar-days"></i>
                      18 فبراير 2023
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="smallNav">
        <ul>
          <li>
            <a href="index.html" className="active">
              <i className="fa-sharp fa-solid fa-house"></i>
              <span>الرئيسية</span>
            </a>
          </li>
          <li>
            <a href="profile.html">
              <i className="fa-solid fa-user"></i>
              <span>حسابى</span>
            </a>
          </li>
          <li>
            <a href="cart.html">
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              <span>السلة</span>
            </a>
          </li>
          <li>
            <a href="notifications.html">
              <i className="fa-sharp fa-solid fa-bell"></i>
              <span>الاشعارات</span>
              <span className="num-count2">3</span>
            </a>
          </li>
          <li>
            <a href="recieved-requests.html">
              <i className="fa-sharp fa-solid fa-cubes"></i>
              <span>الطلبات</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Blogs;
