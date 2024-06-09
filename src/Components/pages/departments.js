import React from 'react'
import "../../Assets/css/styleAR.scss";
import about7 from "../../Assets/images/about7.png";
import category5 from "../../Assets/images/category5.jpg";
import category4 from "../../Assets/images/category4.jpg";
import category3 from "../../Assets/images/category3.jpg";
import category1 from "../../Assets/images/category1.jpg";
import category2 from "../../Assets/images/category2.jpg";
import { Link } from 'react-router-dom';


const Departments = () => {


  return (
    <>

    <main className="main">
        <div className="section-head">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="text-wrap" data-aos="fade-up">
                            <Link to="/">الرئيسية /</Link>
                            <h1>الاقسام</h1>
                        </div>
                    </div>
                    <div className="col-6 hide-sm">
                        <div className="img" data-aos="zoom-in">
                            <img src={about7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
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
                                    <img src= {category4} alt=""/>
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

                                    <img src={category3} alt=""/>

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
                                <img src= {category2} alt="" />

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

                                    
                                    <img src= {category1} alt="" />
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

  )
}

export default Departments