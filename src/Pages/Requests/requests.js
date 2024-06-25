import React from "react";
import { Link } from "react-router-dom";
import av2 from "../../Assets/images/av2.png";
import av1 from "../../Assets/images/av1.png";
import SectionHead from "../../Components/SectionHead/SectionHead";

const Requests = () => {
  return (
    <main className="main">
      <div className="section-head">
      <SectionHead />        

      </div>

      <section className="allRequests">
        <div className="container align-items-end">
          <Link to="/requestAdd" className="btn btn-success mb-4">
            
            <i className="fa-regular fa-hexagon-plus me-2"></i>
            اضف موضوع جديد
          </Link>
          <div className="allRequestsContainer">
            {/* <!-- single Requst -->*/}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status new"> جديد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link href="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single Requst -->*/}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status new"> جديد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link href="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single Requst -->*/}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status new"> جديد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link href="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single Requst -->*/}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status new"> جديد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link href="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- single Requst --> */}
            <div className="singleRequst">
              <div className="row">
                <div className="col-md-8 p-1">
                  <div className="requstPost">
                    <Link to="profile.html">
                      <img src={av2} alt="" />
                    </Link>
                    <div className="postContent">
                      <Link to="/ReaquestDetails" className="postTitle">
                        
                        ابحث عن مصمم صفحة هبوط على ووردبرس
                      </Link>
                      <div className="postUser">
                        <Link to="profile.html" className="name">
                          
                          <i className="fa-regular fa-user"></i> محمد عصام
                        </Link>
                        <p className="time">
                          
                          <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6
                          دقائق
                        </p>
                      </div>
                      <span className="status "> تم التعاقد </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 p-1">
                  <div className="lastInteraction">
                    <Link to="profile.html">
                      <img src={av1} alt="" />
                    </Link>
                    <div className="lastUser">
                      <Link to="profile.html" className="name">
                        
                        محمد عصام
                      </Link>
                      <p className="time">
                        
                        <i className="fa-regular fa-timer"></i> آخر تفاعل منذ 5
                        دقائق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <button className="btn btn-outline-dark m-auto mt-5">

            
            عرض المواضيع الاقدم
            <i className="fa-regular fa-chevrons-down ms-2"></i>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Requests;
