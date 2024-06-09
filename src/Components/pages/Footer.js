import React from 'react'
import "../../Assets/css/styleAR.scss";
import logo from "../../Assets/images/logo.svg";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer>
    <div className="container">
        <div className="row upper-row">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="about">
                    <a className="logo">
                        <img className="brand" src={logo} alt="" />
                    </a>
                    <p>
                        مرحبًا بك في أكبر سوق عربي لبيع وشراء الخدمات المصغرة. نحن هنا لمساعدتك في تحقيق أهدافك
                        بسهولة
                        وأمان. يمكنك الاعتماد على منصتنا لإتمام مهامك ومشاريعك بلاسعار التي تناسبك
                    </p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="links pa-24">
                    <h4>روابط مهمة</h4>
                    <ul>
                        <li>
                            <Link to="about.html">حول ينجز</Link>
                        </li>
                        <li>
                            <Link to="contact.html">تواصل معنا</Link>
                        </li>
                        <li>
                            <Link to="faq.html">الاسئلة الشائعة</Link>
                        </li>
                        <li>
                            <Link to="terms.html">ضمان الحقوق</Link>
                        </li>
                        <li>
                            <Link to="blogs.html">المدونات</Link>
                        </li>
                        <li>
                            <Link to="how-it-works.html">كيف يعمل ينجز</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="links pa-24">
                    <h4>الاقسام</h4>
                    <ul>
                        <li><Link to="search.html">برمجة وتطوير</Link></li>
                        <li><Link to="search.html">تصميم فيديو</Link></li>
                        <li><Link to="search.html">تعليم عن بعد</Link></li>
                        <li><Link to="search.html">كتابة و ترجمة</Link></li>
                        <li><Link to="search.html">التسويق الإلكتروني</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="d-flex flex-column gap-lg-5 gap-4 pa-24">
                    <div className="download-app">
                        <h4>تحميل التطبيق</h4>
                        <ul>
                            <li>
                                <Link to="#">
                                    <div className="text">
                                        <p>
                                            App Store
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa-brands fa-apple"></i>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="text">
                                        <p>
                                            Google Play
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa-brands fa-google-play"></i>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="follow">
                        <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="copy-rights d-flex justify-content-around">
                    <p>
                        حقوق النشر © 2024 جميع الحقوق محفوظة
                    </p>

                </div>
            </div>
        </div>
    </div>
</footer>

    
  )
}

export default Footer