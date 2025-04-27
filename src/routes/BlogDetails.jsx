import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import Swiper from "swiper";
import SectionHeader from "../ui/SectionHeader";
import useBlogDetails from "../features/blogs/useBlogDetails";
import DataLoader from "../ui/DataLoader";
import ErrorPage from "./ErrorPage";

function BlogDetails() {
  const { isLoading, data: blog } = useBlogDetails();
  const { t } = useTranslation();

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  if (isLoading) {
    <DataLoader />;
  }

  if (!isLoading && !blog) {
    return <ErrorPage />;
  }

  const handleShareBlog = () => {
    const url = window.location.href;
    const shareData = {
      title: blog?.title,
      text: blog?.description,
      url: url,
    };

    navigator.share(shareData).catch((error) => {
      console.error("Error sharing:", error);
    });
  };

  return (
    <>
      <SectionHeader />
      <section className="blogDetails">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-12 p-2">
              <button className="shareBlog" onClick={handleShareBlog}>
                <i className="fa-solid fa-share"></i> {t("shareBlog")}
              </button>
            </div>
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
                      {blog?.images?.map((image) => (
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
                {/* <div className="date">
                  <i className="fa-duotone fa-calendar-days"></i>
                  {formattedDate(blog?.created_at)}
                </div> */}
                <p
                  className="description"
                  dangerouslySetInnerHTML={renderHTML(blog?.html)}
                />
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
    </>
  );
}

export default BlogDetails;
