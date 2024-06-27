import React from 'react'
import newpass1 from  "../../../Assets/images/newpass1.svg"

const ResetPassword = () => {
  return (

    <main>
        <section className="login-section forgetpassword container">
            <form action="" className="container form forgetpasswordForm">
                <div className="confirmpass">
                    <img src={newpass1} alt="" />
                </div>
                <h1>ادخل كلمة المرور</h1>
                <p className="title">من فضلك ادخل كلمة المرور الجديدة تكون قوية ويسهل تذكرها .</p>
                <div className="input-field">
                    <label htmlFor="password"><i className="ti ti-md ti-lock"></i> كلمة المرور</label>
                    <input type="password" id="password" name="password" placeholder="***********" />
                </div>
                <div className="input-field">
                    <label htmlFor="confirmPassword"><i className="ti ti-md ti-lock"></i> تأكيد كلمة المرور </label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="***********" />
                </div>
                <button type="submit">تأكيد</button>
            </form>
        </section>
    </main>



  )
}

export default ResetPassword