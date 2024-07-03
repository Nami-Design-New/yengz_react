function RatingFilterBox({ ratingLength }) {
  return (
    <ul className="rate-range">
      <h6>تقييم الخدمة</h6>
      <li>
        <input type="radio" name="rate-range" id="rate-range" />
        <ul className="stars">
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
      </li>
      <li>
        <input type="radio" name="rate-range" id="rate-range" />

        <ul className="stars">
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
        <span>او اكثر</span>
      </li>
      <li>
        <input type="radio" name="rate-range" id="rate-range" />
        <ul className="stars">
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
        <span>او اكثر</span>
      </li>
      <li>
        <input type="radio" name="rate-range" id="rate-range" />
        <ul className="stars">
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
        <span>او اكثر</span>
      </li>
      <li>
        <input type="radio" name="rate-range" id="rate-range" />
        <ul className="stars">
          <li className="star">
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
        <span>او اكثر</span>
      </li>
    </ul>
  );
}

export default RatingFilterBox;
