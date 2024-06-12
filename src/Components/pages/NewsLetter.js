import React from 'react'
import about6 from "../../Assets/images/about6.png";


const NewsLetter = () => {

  return (
    <section className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="img" data-aos="zoom-in">
            <img src={about6} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form" data-aos="fade-up">
            <h3>ابقَ على اتصال مع عالمنا المليء بالإبداع</h3>
            <form action="">
              <div className="input-field">
                <input type="email" placeholder="البريد الالكترونى" />
                <button type="submit">ارسال</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default NewsLetter