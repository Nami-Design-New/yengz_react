function SellerFilterBox() {
  return (
    <ul className="seller-level">
      <h6>مستوى البائع</h6>
      <ul>
        <li>
          <input type="checkbox" id="featured-seller" />
          <label htmlFor="featured-seller">بائع مميز</label>
        </li>
        <li>
          <input type="checkbox" id="active-seller" />
          <label htmlFor="active-seller">بائع نشيط</label>
        </li>
        <li>
          <input type="checkbox" id="new-seller" />
          <label htmlFor="new-seller">بائع جديد</label>
        </li>
      </ul>
    </ul>
  );
}

export default SellerFilterBox;
