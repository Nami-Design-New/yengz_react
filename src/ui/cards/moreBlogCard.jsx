function moreBlogCard({ blog }) {
  return (
    <a href="blogDetails.html" className="blog" data-aos="fade-up">
      {blog?.image && <img src="assets/images/slider1.jpg" alt="" />}
      <div className="data">
        <h6 className="title">{blog?.name}</h6>
        {blog?.description && (
          <p className="description">{blog?.description}</p>
        )}
      </div>
    </a>
  );
}

export default moreBlogCard;
