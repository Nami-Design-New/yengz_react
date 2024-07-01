import React from "react";
import { Link } from "react-router-dom";
import av2 from "../Assets/images/av2.png";
import av1 from "../Assets/images/av1.png";
import SectionHeader from "../ui/SectionHeader";

const ReaquestDetails = () => {
  return (
    <>
      <div className="section-head">
        <SectionHeader />
      </div>
      <section className="requestDetails">
        <div className="container">
          <div className="postDetails">
            <span className="status new">جديد</span>
            <p>
              السلام عليكم، أرغب في إنشاء صفحة هبوط لمنتج على ووردبريس. لدي
              استضافة لكن لم أنشئ الموقع بعد وأنتظر منكم ذلك. أود رؤية بعض
              الأمثلة التي قمتم بتصميمها ومعرفة أسعارها، بالإضافة إلى نموذج
              الطلب.
            </p>
            <div className="postUser">
              <Link to="/profile" className="name">
                <i className="fa-regular fa-user"></i> محمد عصام
              </Link>
              <p className="time">
                <i className="fa-regular fa-timer"></i> منذ 22 ساعة و6 دقائق
              </p>
              <button className="btn btn-dark ms-auto"> تم التعاقد </button>
            </div>
          </div>
          {/* <!-- Comments Section -->**/}
          <div className="row">
            <div className="col-md-8 p-2">
              {/*<!-- All Comments -->*/}

              <div className="allComments">
                <div className="title">
                  <h5> التعليقات </h5>
                </div>
                {/*<!--  Comment -->*/}

                <div className="comment">
                  <div className="userCommented">
                    <Link to="/profile">
                      <img src={av2} alt="صورة المستخدم" />
                    </Link>
                    <div className="lastUser">
                      <Link to="/profile" className="name">
                        أحمد الزهراني
                      </Link>
                      <p className="time">
                        <i className="fa-regular fa-timer"></i> منذ ساعة واحدة
                      </p>
                    </div>
                  </div>
                  <p className="text">
                    نعم، لدي خبرة في تصميم صفحات الهبوط على ووردبريس ويمكنني
                    مساعدتك في مشروعك.
                  </p>
                </div>
                {/*<!--  Comment -->*/}
                <div className="comment">
                  <div className="userCommented">
                    <Link to="/profile">
                      <img src={av1} alt="صورة المستخدم" />
                    </Link>

                    <div className="lastUser">
                      <Link to="/profile" className="name">
                        سارة القحطاني
                      </Link>
                      <p className="time">
                        <i className="fa-regular fa-timer"></i> منذ 3 ساعات
                      </p>
                    </div>
                  </div>
                  <p className="text">
                    أعتقد أن صفحة الهبوط يجب أن تحتوي على تفاصيل واضحة وجذابة عن
                    المنتج لجذب الانتباه.
                  </p>
                </div>
                {/*<!--  Comment -->*/}
                <div className="comment">
                  <div className="userCommented">
                    <Link to="/profile">
                      <img src={av2} alt="صورة المستخدم" />
                    </Link>
                    <div className="lastUser">
                      <Link to="/profile" className="name">
                        أحمد الزهراني
                      </Link>
                      <p className="time">
                        <i className="fa-regular fa-timer"></i> منذ ساعة واحدة
                      </p>
                    </div>
                  </div>
                  <p className="text">
                    نعم، لدي خبرة في تصميم صفحات الهبوط على ووردبريس ويمكنني
                    مساعدتك في مشروعك.
                  </p>
                </div>
                {/*<!--  Comment -->*/}
                <div className="comment">
                  <div className="userCommented">
                    <Link to="/profile">
                      <img src={av1} alt="صورة المستخدم" />
                    </Link>
                    <div className="lastUser">
                      <Link to="/profile" className="name">
                        سارة القحطاني
                      </Link>
                      <p className="time">
                        <i className="fa-regular fa-timer"></i> منذ 3 ساعات
                      </p>
                    </div>
                  </div>
                  <p className="text">
                    أعتقد أن صفحة الهبوط يجب أن تحتوي على تفاصيل واضحة وجذابة عن
                    المنتج لجذب الانتباه.
                  </p>
                </div>
              </div>
              {/*<!-- Add Comment Form -->*/}

              <div className="addComment">
                <div className="title">
                  <h5> أضف تعليق </h5>
                </div>
                <form action="path_to_form_handling_script">
                  <div className="input-field mt-2 mb-4">
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="اكتب تعليقك هنا"
                    ></textarea>
                  </div>
                  <div className="input-field mb-2 flex-row gap-4 ps-3 ">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="bg-transparent p-0 w-auto h-auto"
                    />
                    <label htmlFor="terms">
                      لقد قرأت وأوافق على
                      <Link to="/terms">الشروط والأحكام</Link>
                    </label>
                  </div>
                  <div className="d-flex justify-content-start py-4">
                    <button type="submit" className="btn btn-success px-5">
                      نشر
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/*<!-- Sidebar with Latest Posts -->*/}

            <div className="col-md-4 p-2">
              <div className="lastPosts">
                <div className="title">
                  <h5> آخر المساهمات </h5>
                </div>
                <div className="posts">
                  {/*<!-- Post -->*/}
                  <div className="post">
                    <Link to="/profile">
                      <img src={av2} alt="صورة المستخدم" />
                    </Link>
                    <Link to="/post-details">
                      مطلوب مبرمج لتطوير تطبيق جوال
                    </Link>
                  </div>
                  {/*<!-- Post -->*/}
                  <div className="post">
                    <Link to="/profile">
                      <img src={av1} alt="صورة المستخدم" />
                    </Link>
                    <Link to="/another_post_details">
                      بحاجة إلى مصمم جرافيك لإنشاء شعار
                    </Link>
                  </div>
                  {/*<!-- Post -->*/}
                  <div className="post">
                    <Link to="/profile">
                      <img src={av2} alt="صورة المستخدم" />
                    </Link>
                    <Link to="/post-details">
                      مطلوب مبرمج لتطوير تطبيق جوال
                    </Link>
                  </div>
                  {/*<!-- Post -->*/}

                  <div className="post">
                    <Link to="/profile">
                      <img src={av1} alt="صورة المستخدم" />
                    </Link>
                    <Link to="another_post_details">
                      بحاجة إلى مصمم جرافيك لإنشاء شعار
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReaquestDetails;
