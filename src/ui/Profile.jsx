import React from 'react'
import avatar from "../Assets/images/avatar.png" 
import bann from "../Assets/images/bann.webp" 
import rateowner1 from "../Assets/images/rateowner1.webp" 






const Profile = () => {
  return (

    
    <main>
        <section className="profile-section container">
            <div className="row">
                <div className="profile-descripe col-lg-5 col-12">
                    <div className="banner">
                        <div className="user-avatar">
                            <a href="assets/images/avatar.png" data-fancybox="user-avatar">
                                <img src={avatar} alt="user-avatar" />
                            </a>
                            <span className="status"></span>
                        </div>
                    </div>
                    <div className="name-rate">
                        <h6>خالد عوض</h6>
                        <span><i className="ti ti-md ti-briefcase"></i> بائع مميز</span>
                        <div className="rate">
                            <ul>
                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cash">
                        <div className="head">
                            <h4><i className="ti ti-md ti-info-circle"></i> الرصيد</h4>
                            <a href="#!">سحب</a>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4 p-0">
                                <div className="cash-info">
                                    <span>الرصيد الكلي</span>
                                    <h6>100.00 <i className="fa-solid fa-dollar-sign"></i></h6>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="cash-info">
                                    <span> رصيد معلّق </span>
                                    <h6>0.00 <i className="fa-solid fa-dollar-sign"></i></h6>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="cash-info">
                                    <span> أرباح يمكن سحبها </span>
                                    <h6>89.00 <i className="fa-solid fa-dollar-sign"></i></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-taps col-lg-7 col-12 pe-lg-5 ps-lg-5 pe-0 ps-0">
                    {/*<!-- Tablist -->*/}
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    {/*<!-- Tablist -->*/}

                    <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-about-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about"
                                aria-selected="true">نبذة عني</button>
                        </li>
                                            {/*<!-- tab -->*/}

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-services-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-services" type="button" role="tab" aria-controls="pills-services"
                                aria-selected="false">الخدمات</button>
                        </li>
                                            {/*<!-- tab -->*/}
                        
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-rating-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-rating" type="button" role="tab" aria-controls="pills-rating"
                                aria-selected="false">التقييمات</button>
                        </li>
                                            {/*<!-- tab -->*/}
                                            <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-verification-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-verification" type="button" role="tab"
                                aria-controls="pills-verification" aria-selected="false">توثيقات</button>
                        </li>
                                            {/*<!-- tab -->*/}
                                            <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-statics-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-statics" type="button" role="tab" aria-controls="pills-statics"
                                aria-selected="false">احصائيات</button>
                        </li>
                    </ul>
                                            {/*<!-- tab -->*/}
                                            <div className="tab-content" id="pills-tabContent">
                                            {/*<!-- tab -->*/}
                                            <div className="tab-pane fade show active" id="pills-about" role="tabpanel"
                            aria-labelledby="pills-about-tab">
                            <p>
                                انا خالد عوض مبرمج مواقع بخبرة تفوق الاربع سنوات عملت على كثير من المشاريع وقمت بتنفيذ
                                عدت مواقع لشركات محلية ودولية. =================مميزات العمل معي=================
                                <br />
                            <ul>
                                <li>-توفير خدمة ممتازة وبحودة عالية في وقت قياسي.</li>
                                <li>-توفير خدمة الدعم بعد البيع واستلام مشروعك في حالة ظهور اي شئ.</li>
                                <li>-خبرة جيدة في مجال البرمجة ويمكنني فهم اي خدمات تريدها في مشروعك .</li>
                                <li>-تخصصي ((computer science and artificial intellience)).</li>
                                <li>-سرعة الرد على الرسائل.</li>
                                <li>-هدفي الاول هو ارضائك كعميل.</li>
                            </ul>
                            </p>
                        </div>

                        {/*<!-- services tab content -->*/}
                        
                        <div className="tab-pane fade" id="pills-services" role="tabpanel"
                            aria-labelledby="pills-services-tab">
                            <div className="services-contianer">
                                <a href="add-sevice.html" className="add-service">
                                    <i className="ti ti-md ti-circle-plus"></i> اضف خدمة
                                </a>
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-12 p-2">
                                            <div className="service-card">
                                                <a href="service.html" className="img">
                                                    <img src={bann}  alt=""/>
                                                </a>
                                                <div className="content">
                                                    <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                                                    <p><a href="#!">برمجة وتطوير</a> / <span>إنشاء تطبيق</span></p>
                                                    <div className="d-flex gap-3">
                                                        <div className="rate">
                                                            <ul>
                                                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                                                <li className="star"><i className="fa-solid fa-star"></i></li>
                                                                <li><i className="fa-solid fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                        <span className="sell-count">( 4 )</span>
                                                    </div>
                                                    <h6 className="start-from">تبدأ من : <b>10.00$</b></h6>
                                                    <a href="edit-service.html" className="editService">
                                                        <i className="fa-regular fa-file-pen"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- rating tab content --> */}
                        <div className="tab-pane fade" id="pills-rating" role="tabpanel" aria-labelledby="pills-rating-tab">
                            <div className="rate-card">
                                <div className="rate-owner">
                                    <div className="rate-head d-flex">
                                        <div className="img">
                                            <img src={rate-owner1}  alt="rater"/>
                                        </div>
                                        <div className="name-time">
                                            <h5>احمد محسن</h5>
                                            <span>منذ 9 أيام و18 ساعة</span>
                                        </div>
                                    </div>
                                    <p className="rate-text">انصح به وبقوة لن تجدون مثل خدمته وابداعه واخلاقه قد يفوتكم
                                        عمركم اذا لم تتعملو
                                        معه لانه جدا بعد خدمته تقولون فعلا يستحق التتعامل معه</p>
                                    <div className="rating-cards container">
                                        <div className="row">
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>التسليم بالموعد</h6>
                                                    <div className="rate">

                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>التواصل والمتابعة</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>جودة الخدمة</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rate-card">
                                <div className="rate-owner">
                                    <div className="rate-head d-flex">
                                        <div className="img">
                                            <img src="assets/images/rate-owner3.jpg" alt="rater" />
                                        </div>
                                        <div className="name-time">
                                            <h5>خالد عوض</h5>
                                            <span>منذ 10 أيام و19 ساعة</span>
                                        </div>
                                    </div>
                                    <p className="rate-text">رقي في التعامل ومتعاون جدا وانصح الجميع بالتعامل معه</p>
                                    <div className="rating-cards container">
                                        <div className="row">
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>التسليم بالموعد</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>التواصل والمتابعة</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>جودة الخدمة</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rate-card">
                                <div className="rate-owner">
                                    <div className="rate-head d-flex">
                                        <div className="img">
                                            <img src="assets/images/rate-owner2.jpg" alt="rater" />
                                        </div>
                                        <div className="name-time">
                                            <h5>يوسف الشربيني</h5>
                                            <span>منذ 17 يوم و15 ساعة</span>
                                        </div>
                                    </div>
                                    <p className="rate-text">تجربة جدا رائعة مع الاخ رشيد محترف جدا في التصميم وتم التسليم
                                        بالموعد بالاضافة لكونه شخص راقي جدا بالتعامل سررت بمعرفتك وجزاك الله كل خير
                                        وبالتأكيد لن يكون اخر تعامل شكرا،شكرا اخي رشيد</p>
                                    <div className="rating-cards container">
                                        <div className="row">
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>التسليم بالموعد</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>التواصل والمتابعة</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 p-2">
                                                <div className="r-card ">
                                                    <h6>جودة الخدمة</h6>
                                                    <div className="rate">
                                                        <ul>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li className="star"><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                            <li><i className="fa-solid fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       {/* <!-- verification tab content -->*/} 
                       
                        <div className="tab-pane fade" id="pills-verification" role="tabpanel"
                            aria-labelledby="pills-verification-tab">
                            <ul className="verify-list">
                                <li className="d-flex gap-2">
                                    <span><i className="ti ti-md ti-discount-check-filled"></i></span> الهوية الشخصية
                                </li>
                                <li className="d-flex gap-2">
                                    <span><i className="ti ti-md ti-discount-check-filled"></i></span> رقم الجوال
                                </li>
                                <li className="d-flex gap-2">
                                    <span><i className="ti ti-md ti-discount-check-filled"></i></span> البريد الإلكتروني
                                </li>
                            </ul>
                            <div className="unverified-box">
                                <h6>الحساب غير موثق</h6>
                                <a href="auth-verify-steps.html">توثيق الحساب</a>
                            </div>
                        </div>
                        {/*<!-- statics tab content -->*/}
                        <div className="tab-pane fade" id="pills-statics" role="tabpanel"
                            aria-labelledby="pills-statics-tab">
                            <ul className="statics-list">
                                <li className="d-flex justify-content-between">
                                    <h6>متوسط سرعة الرد</h6>
                                    <span>60 <small>د</small></span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <h6>الخدمات المنشورة</h6>
                                    <span>4</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <h6>عدد العملاء</h6>
                                    <span>65</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


  )
}

export default Profile