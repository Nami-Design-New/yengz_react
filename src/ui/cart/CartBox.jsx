import { Link } from "react-router-dom";

function CartBox({ item }) {
  return (
    <div className="service container">
      <div className="row">
        <div className="col-lg-7 col-12">
          <div className="service-head">
            <Link to="/services" className="img">
              <img src={item.image} alt="service" />
            </Link>
            <div className="title">
              <h5>{item.title}</h5>
              <div className="owner">
                <div className="owner-avatar">
                  <img src={item.user.image} alt="owner" />
                </div>
                <span>{item.user.name}</span>
              </div>
            </div>
          </div>
          <div className="more-develop">
            {item?.description &&
              item.description.map((descrip) => (
                <div
                  className="d-flex input-field align-items-baseline"
                  key={descrip.title}
                >
                  <input type="checkbox" id="check-1" />
                  <div className="label">
                    <label htmlFor="check-1">{descrip.title}</label>
                    <p>{descrip.content}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div className="add-cart">
            <div className="input-field">
              <button className="add">
                <i className="fa-solid fa-plus"></i>
              </button>
              <input type="number" />
              <button className="minus">
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
            <div className="total d-flex justify-content-between align-items-center">
              <p>
                الإجمالي : <br />
                <span>
                  + <span id="num">{item.quantity}</span> خدمة مضافة
                </span>
              </p>
              <div className="d-flex gap-3">
                <h6>
                  {item.price}
                  <i className="fa-solid fa-dollar-sign"></i>
                </h6>
                <button>
                  <i className="fa-light fa-trash-can"></i>
                </button>
              </div>
            </div>
            <button className="request-order">
              <i className="fa-solid fa-cart-plus"></i> اضف الي السلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBox;
