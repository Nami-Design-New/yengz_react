function SellerStatusFilterBox() {
  return (
    <ul className="seller-level">
      <h6>حالة البائع</h6>
      <ul>
        <li>
          <input type="checkbox" id="verified-seller" />
          <label htmlFor="verified-seller">هوية موثقة</label>
        </li>
        <li>
          <input type="checkbox" id="available-seller" />
          <label htmlFor="available-seller">متواجد حالياً</label>
        </li>
      </ul>
    </ul>
  );
}

export default SellerStatusFilterBox;
