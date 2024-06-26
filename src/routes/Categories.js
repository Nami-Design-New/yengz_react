import React from "react";

import category5 from "../Assets/images/category5.webp";
import category4 from "../Assets/images/category4.webp";
import category3 from "../Assets/images/category3.webp";
import category1 from "../Assets/images/category1.webp";
import category2 from "../Assets/images/category2.webp";
import { Link } from "react-router-dom";
import SectionHead from "../ui/SectionHead";

const Categories = () => {
  return (
    <>
      <main className="main">
        <div className="section-head">
          <SectionHead />
        </div>
        <section className="department">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6 p-2">
                <div className="category-card" data-aos="fade-up">
                  <Link to="/Search" className="inner-card">
                    <div className="category-img">
                      <img src={category5} alt="" />
                    </div>
                    <div className="category-content">
                      <div className="top-area">
                        <h6 className="title mb-1">1.853 خدمة</h6>
                        <h5 className="text"> صوتيات </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-6 p-2">
                <div className="category-card" data-aos="fade-up">
                  <Link to="/Search" className="inner-card">
                    <div className="category-img">
                      <img src={category4} alt="" />
                    </div>
                    <div className="category-content">
                      <div className="top-area">
                        <h6 className="title mb-1">1.853 خدمة</h6>
                        <h5 className="text"> كتابة وترجمة </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 p-2">
                <div className="category-card" data-aos="fade-up">
                  <Link to="/Search" className="inner-card">
                    <div className="category-img">
                      <img src={category3} alt="" />
                    </div>
                    <div className="category-content">
                      <div className="top-area">
                        <h6 className="title mb-1">1.853 خدمة</h6>
                        <h5 className="text"> تسويق الكتروني </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 p-2">
                <div className="category-card" data-aos="fade-up">
                  <Link to="/Search" className="inner-card">
                    <div className="category-img">
                      <img src={category2} alt="" />

                      <img src="assets/images/category-2.jpg" alt="" />
                    </div>
                    <div className="category-content">
                      <div className="top-area">
                        <h6 className="title mb-1">1.853 خدمة</h6>
                        <h5 className="text"> تصميم وابداع </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6 p-2">
                <div className="category-card" data-aos="fade-up">
                  <Link to="/Search" className="inner-card">
                    <div className="category-img">
                      <img src={category1} alt="" />
                    </div>
                    <div className="category-content">
                      <div className="top-area">
                        <h6 className="title mb-1">1.853 خدمة</h6>
                        <h5 className="text"> برمجة وتطوير </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
