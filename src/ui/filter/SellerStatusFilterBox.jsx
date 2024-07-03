function SellerStatusFilterBox({
  user_verification,
  user_available,
  onChange,
}) {
  return (
    <ul className="seller-level">
      <h6>حالة البائع</h6>
      <ul>
        <li>
          <input
            type="checkbox"
            id="user_verification"
            checked={+user_verification === 1}
            // value={user_verification}
            onChange={onChange}
          />
          <label htmlFor="user_verification">هوية موثقة</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="user_available"
            checked={+user_available === 1}
            // value={user_available}
            onChange={onChange}
          />
          <label htmlFor="user_available">متواجد حالياً</label>
        </li>
      </ul>
    </ul>
  );
}

export default SellerStatusFilterBox;
