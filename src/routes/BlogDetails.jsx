import Swiper from "swiper";
import SectionHeader from "../ui/SectionHeader";
import { SwiperSlide } from "swiper/react";
import useBlogDetails from "../features/blogs/useBlogDetails";
import DataLoader from "../ui/DataLoader";
import { formattedDate } from "../utils/helpers";

function BlogDetails() {
  const { isLoading, data: blog } = useBlogDetails();

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <>
      <SectionHeader />
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="blogDetails">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-7 col-xl-7 p-2">
                <div className="blog" data-aos="fade-up">
                  <div className="swiper blogSwiper">
                    {blog?.images && (
                      <Swiper
                        className="mySwiper"
                        slidesPerView={1}
                        effect="fade"
                        loop={true}
                        modules={[Navigation, EffectFade, Autoplay]}
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                      >
                        {blog.images?.map((image) => (
                          <SwiperSlide
                            key={image.image}
                            className="service-slide"
                          >
                            <img src={image.image} alt="service" />
                          </SwiperSlide>
                        ))}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </Swiper>
                    )}
                  </div>
                  <div className="date">
                    <i className="fa-duotone fa-calendar-days"></i>
                    {formattedDate(blog?.created_at)}
                  </div>
                  <h2 dangerouslySetInnerHTML={renderHTML(blog?.html)} />
                  {blog?.description && (
                    <p className="description">
                      أصبحت الدورات الأونلاين جزءًا لا يتجزأ من تطوير المهنة،
                      حيث تقدم فرصًا تعليمية مرنة ومتاحة للأفراد في جميع أنحاء
                      العالم. مع تقدمنا في العام 2024، تتطور الطلبات على
                      المهارات الخاصة بشكل مستمر ردًا على التطورات التكنولوجية
                      واتجاهات السوق ومتطلبات الوظائف المتغيرة. إليك أهم 10
                      مهارات يمكنك تعلمها من خلال الدورات الأونلاين في عام 2024
                      للبقاء تنافسيًا في سوق العمل الديناميكي اليوم: علم
                      البيانات والتحليلات: مع الأهمية المتزايدة لاتخاذ القرارات
                      المبنية على البيانات، فإن الإلمام بأدوات وتقنيات علم
                      البيانات مثل Python و R وخوارزميات التعلم الآلي مطلوب بشدة
                      في جميع الصناعات. التسويق الرقمي: مع استمرار الشركات في
                      إعطاء الأولوية لوجودها على الإنترنت، يمكن أن يفتح إتقان
                      استراتيجيات التسويق الرقمي، بما في ذلك تحسين محركات البحث
                      والتسويق عبر وسائل التواصل الاجتماعي وإنشاء المحتوى، فرصًا
                      وظيفية مربحة. أمن المعلومات: مع زيادة التهديدات السيبرانية
                      وانتهاكات البيانات، فإن مهارات أمن المعلومات ضرورية لحماية
                      المعلومات الحساسة والحفاظ على أمان الأصول الرقمية. الحوسبة
                      السحابية: اعتماد التقنيات السحابية قد تسارع، مما أدى إلى
                      الطلب على محترفين ماهرين في منصات السحابة مثل AWS و Azure
                      و Google Cloud لإدارة البنية التحتية ونشر التطبيقات.
                      الذكاء الاصطناعي وتعلم الآلة: يقوم الذكاء الاصطناعي وتعلم
                      الآلة بتحويل الصناعات، ودفع الابتكار في مجالات مثل
                      التحليلات التنبؤية ومعالجة اللغة الطبيعية ورؤية الكمبيوتر.
                      تصميم تجربة المستخدم وواجهة المستخدم: مهارات تصميم تجربة
                      المستخدم (UX) وواجهة المستخدم (UI) ضرورية لإنشاء منتجات
                      رقمية سهلة الاستخدام وجذابة، بما في ذلك المواقع
                      الإلكترونية وتطبيقات الجوّال وواجهات البرمجيات. إدارة
                      المشاريع: المهارات الفعّالة في إدارة المشاريع، بما في ذلك
                      منهجيات التطوير السريع وأدوات تخطيط المشاريع مثل Asana و
                      Trello، قيمة للإشراف على المشاريع المعقدة وتقديم النتائج
                      في الوقت المناسب وداخل الميزانية. تكنولوجيا البلوكشين: مع
                      استمرار تعطيل التقنيات البلوكشين للصناعات التقليدية، فإن
                      فهم مبادئها وتطبيقاتها، مثل العملات المشفرة والعقود الذكية
                      والتمويل اللامركزي (DeFi)، يمكن أن يؤدي إلى فرص وظيفية
                      مثيرة. التعاون والتواصل عن بعد: مع تحول العمل عن بعد ليصبح
                      الأمر الجديد الطبيعي، فإن اتقان أدوات وتقنيات التعاون
                      الافتراضي، مثل المؤتمرات عبر الفيديو وإدارة المشاريع عبر
                      الإنترنت والتواصل الغير متزامن، أمر ضروري لتحقيق النجاح في
                      القوى العاملة الموزعة. تطوير المهارات الناعمة: بالإضافة
                      إلى المهارات الفنية، فإن أصحاب العمل يبحثون بشكل متزايد عن
                      المرشحين الذين يتمتعون بمهارات ناعمة قوية مثل التواصل وحل
                      المشكلات والتكيف والذكاء العاطفي، والتي يمكن تطويرها من
                      خلال الدورات الأونلاين وتجارب التعلم التفاعلية. من خلال
                      الاستثمار في الدورات الأونلاين التي تغطي هذه الـ 10 مهارات
                      الرئيسية، يمكنك تعزيز ملفك الاحترافي، والبقاء تنافسيًا في
                      سوق العمل اليوم، وتحقيق النجاح في عام 2024 وما بعده. سواء
                      كنت تتطلع إلى التقدم في مجالك المهني الحالي أو الانتقال
                      إلى مجال جديد، فإن التعلم المستمر من خلال الدورات
                      الأونلاين هو المفتاح لفتح فرص جديدة وتحقيق أهدافك المهنية.
                    </p>
                  )}
                </div>
              </div>
              {blog?.moreBlogs && blog?.moreBlogs.length > 0 && (
                <div className="col-lg-5 col-xl-4 p-1">
                  <div className="Moreblogs">
                    <h1 className="headTitle"> {t("blog.moreBlogs")} </h1>
                    {blog?.moreBlogs?.map((blog) => (
                      <moreBlogCard blog={blog} key={blog?.id} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default BlogDetails;
