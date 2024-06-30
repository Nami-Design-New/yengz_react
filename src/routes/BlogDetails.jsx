import React from "react";
import { Link } from "react-router-dom";
import slider1 from "../Assets/images/slider1.webp";
import slider2 from "../Assets/images/slider2.webp";
import slider3 from "../Assets/images/slider3.webp";
import slider4 from "../Assets/images/slider4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../ui/SectionHeader";

import "swiper/css";

const BlogDetails = () => {
  return (
    <main className="main">
      <div className="section-head">
        <SectionHeader />
      </div>

      <section className="blogDetails">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-7 col-xl-7 p-2">
              {/*<!-- main blog details -->*/}
              <div className="blog" data-aos="fade-up">
                <div className="swiper blogSwiper">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img className="lazy" src={slider1} alt="" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img className="lazy" src={slider2} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img className="lazy" src={slider3} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img className="lazy" src={slider4} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="date">
                  <i className="fa-duotone fa-calendar-days"></i>
                  18 , فبراير , 2023
                </div>
                <h2 className="title">
                  الدليل النهائي لاختيار الدورة الأونلاين المناسبة
                </h2>
                <p className="description">
                  أصبحت الدورات الأونلاين جزءًا لا يتجزأ من تطوير المهنة، حيث
                  تقدم فرصًا تعليمية مرنة ومتاحة للأفراد في جميع أنحاء العالم.
                  مع تقدمنا في العام 2024، تتطور الطلبات على المهارات الخاصة
                  بشكل مستمر ردًا على التطورات التكنولوجية واتجاهات السوق
                  ومتطلبات الوظائف المتغيرة. إليك أهم 10 مهارات يمكنك تعلمها من
                  خلال الدورات الأونلاين في عام 2024 للبقاء تنافسيًا في سوق
                  العمل الديناميكي اليوم:
                  <br />
                  علم البيانات والتحليلات: مع الأهمية المتزايدة لاتخاذ القرارات
                  المبنية على البيانات، فإن الإلمام بأدوات وتقنيات علم البيانات
                  مثل Python و R وخوارزميات التعلم الآلي مطلوب بشدة في جميع
                  الصناعات.
                  <br />
                  التسويق الرقمي: مع استمرار الشركات في إعطاء الأولوية لوجودها
                  على الإنترنت، يمكن أن يفتح إتقان استراتيجيات التسويق الرقمي،
                  بما في ذلك تحسين محركات البحث والتسويق عبر وسائل التواصل
                  الاجتماعي وإنشاء المحتوى، فرصًا وظيفية مربحة.
                  <br />
                  أمن المعلومات: مع زيادة التهديدات السيبرانية وانتهاكات
                  البيانات، فإن مهارات أمن المعلومات ضرورية لحماية المعلومات
                  الحساسة والحفاظ على أمان الأصول الرقمية.
                  <br />
                  الحوسبة السحابية: اعتماد التقنيات السحابية قد تسارع، مما أدى
                  إلى الطلب على محترفين ماهرين في منصات السحابة مثل AWS و Azure
                  و Google Cloud لإدارة البنية التحتية ونشر التطبيقات.
                  <br />
                  الذكاء الاصطناعي وتعلم الآلة: يقوم الذكاء الاصطناعي وتعلم
                  الآلة بتحويل الصناعات، ودفع الابتكار في مجالات مثل التحليلات
                  التنبؤية ومعالجة اللغة الطبيعية ورؤية الكمبيوتر.
                  <br />
                  تصميم تجربة المستخدم وواجهة المستخدم: مهارات تصميم تجربة
                  المستخدم (UX) وواجهة المستخدم (UI) ضرورية لإنشاء منتجات رقمية
                  سهلة الاستخدام وجذابة، بما في ذلك المواقع الإلكترونية وتطبيقات
                  الجوّال وواجهات البرمجيات.
                  <br />
                  إدارة المشاريع: المهارات الفعّالة في إدارة المشاريع، بما في
                  ذلك منهجيات التطوير السريع وأدوات تخطيط المشاريع مثل Asana و
                  Trello، قيمة للإشراف على المشاريع المعقدة وتقديم النتائج في
                  الوقت المناسب وداخل الميزانية.
                  <br />
                  تكنولوجيا البلوكشين: مع استمرار تعطيل التقنيات البلوكشين
                  للصناعات التقليدية، فإن فهم مبادئها وتطبيقاتها، مثل العملات
                  المشفرة والعقود الذكية والتمويل اللامركزي (DeFi)، يمكن أن يؤدي
                  إلى فرص وظيفية مثيرة.
                  <br />
                  التعاون والتواصل عن بعد: مع تحول العمل عن بعد ليصبح الأمر
                  الجديد الطبيعي، فإن اتقان أدوات وتقنيات التعاون الافتراضي، مثل
                  المؤتمرات عبر الفيديو وإدارة المشاريع عبر الإنترنت والتواصل
                  الغير متزامن، أمر ضروري لتحقيق النجاح في القوى العاملة
                  الموزعة.
                  <br />
                  تطوير المهارات الناعمة: بالإضافة إلى المهارات الفنية، فإن
                  أصحاب العمل يبحثون بشكل متزايد عن المرشحين الذين يتمتعون
                  بمهارات ناعمة قوية مثل التواصل وحل المشكلات والتكيف والذكاء
                  العاطفي، والتي يمكن تطويرها من خلال الدورات الأونلاين وتجارب
                  التعلم التفاعلية.
                  <br />
                  من خلال الاستثمار في الدورات الأونلاين التي تغطي هذه الـ 10
                  مهارات الرئيسية، يمكنك تعزيز ملفك الاحترافي، والبقاء تنافسيًا
                  في سوق العمل اليوم، وتحقيق النجاح في عام 2024 وما بعده. سواء
                  كنت تتطلع إلى التقدم في مجالك المهني الحالي أو الانتقال إلى
                  مجال جديد، فإن التعلم المستمر من خلال الدورات الأونلاين هو
                  المفتاح لفتح فرص جديدة وتحقيق أهدافك المهنية.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4 p-1">
              <div className="Moreblogs">
                <h1 className="headTitle"> المزيد من الأخبار </h1>
                {/*   <!-- blog -->*/}
                <Link to="/blog-details" className="blog" data-aos="fade-up">
                  <img className="lazy" src={slider1} alt="" />
                  <div className="data">
                    <h6 className="title">
                      كيف تستفيد إلى أقصى حد من استثمارك في الدورات الأونلاين
                    </h6>
                    <p className="description">
                      تقدم الدورات الأونلاين ثروة من المعرفة والمهارات، ولكن
                      الانضمام إلى دورة ليس كافيًا لضمان النجاح. للحصول على قيمة
                      كبيرة من استثمارك في التعلم الأونلاين، اعتبر الاستراتيجيات
                      التالية:
                    </p>
                  </div>
                </Link>
                {/*   <!-- blog -->*/}
                <Link to="/blog-details" className="blog" data-aos="fade-up">
                  <img className="lazy" src={slider2} alt="" />
                  <div className="data">
                    <h6 className="title">
                      صعود التعلم الصغير: الدورات قصيرة المدى لأقصى تأثير
                    </h6>
                    <p className="description">
                      في عالمنا السريع التغير، يتم استبدال الأساليب التقليدية
                      للتعلم ببدائل أكثر مرونة وكفاءة. تعتبر واحدة من هذه
                      الاتجاهات التي اكتسبت شعبية كبيرة في السنوات الأخيرة هي
                      التعلم الصغير. ينطوي التعلم الصغير على تقديم المحتوى في
                      نقاط صغيرة ومركزة، تتراوح عادة من بضع دقائق إلى حوالي 15
                      دقيقة في الطول
                    </p>
                  </div>
                </Link>
                {/*   <!-- blog -->*/}
                <Link to="/blog-details" className="blog" data-aos="fade-up">
                  <img className="lazy" src={slider3} alt="" />

                  <div className="data">
                    <h6 className="title">
                      التعلم غير التقليدي: استكشاف دورات فريدة ومتخصصة
                    </h6>
                    <p className="description">
                      في المشهد التعليمي الأونلاين المتزايد، تعتبر المواد
                      التقليدية مثل الرياضيات والعلوم واللغة مجرد القمة من الجبل
                      الجليدي. مع نمو الطلب على المهارات المتخصصة وسعي المتعلمين
                      للحصول على تجارب تعلم فريدة، بدأت الدورات غير التقليدية في
                      الظهور لتلبية مختلف الاهتمامات والصناعات النيش.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
