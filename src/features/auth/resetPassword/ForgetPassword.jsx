import React from 'react'
import forgetpass1 from "../../../Assets/images/forgetpass1.svg";


const ForgetPassword = () => {

  return (
    
    <main>

    <section className="login-section forgetpassword container">
        <form action="/password-otp" className="container form forgetpasswordForm">
            <div className="illustration">
                <img src={forgetpass1}  alt="" />
            </div>
            <h1>نسيت كلمة المرور ..!</h1>
            <p className="title">من فضلك ادخل البريد الالكتروني المسجل لدينا لارسال رمز التحقق. </p>
            <div className="input-field">
                <label htmfor="email"><i className="ti ti-md ti-mail"></i> البريد الالكتروني</label>
                <input type="email" id="email" name="email" placeholder="مثال : mail@mail.com" />
            </div>
            <button type="submit">ارسال</button>
        </form>
    </section>

  </main>

   
  )
}

export default ForgetPassword