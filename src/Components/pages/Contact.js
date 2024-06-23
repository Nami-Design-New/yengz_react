import React from 'react'
import contact from "../../Assets/images/contact.jpg"
import NewsLetter from './NewsLetter'
import SectionHead from './SectionHead'

const Contact = () => {

  return (
    <main className="main">

    <section className="contact-section">
        <div className="section-head">
        <SectionHead />        
        </div>

        <div className="container mtb-64">
            <div className="row">
                <div className="col-lg-6 col-12 p-3">
                    <div className="shaded-card" data-aos="fade-up">
                        <form className="container" action="">
                            <div className="row">
                                <div className="col-12 input-filed">
                                    <input type="text" name="name" id="name" placeholder="الاسم بالكامل"/>
                                </div>
                                <div className="col-12 input-filed">
                                    <input type="email" name="email" id="email" placeholder="البريد الالكترونى"/>
                                </div>
                                <div className="col-12 input-filed">
                                    <input type="tel" name="tel" id="tel" placeholder="رقم الجوال" />
                                </div>
                                <div className="col-12 input-filed">
                                    <textarea name="message" id="message" placeholder="رسالتك"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit">ارسال</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-12 p-3">
                    <div className="img" data-aos="fade-up">
                        <img className="c-image" src={contact} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='Newsletter'>
        <NewsLetter />
        </div>
    </section>
    </main>

   
  )
}

export default Contact