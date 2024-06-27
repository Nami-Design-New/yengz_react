import React from "react";

const FormOTP = () => {
  return (
    <form
      action="auth-resetpassword-step3.html"
      class="container form forgetpasswordForm otp-small"
    >
      <div class="otp">
        <img src="assets/images/otp1.svg" alt="" />
      </div>

      <h1>ادخل رمز التحقق</h1>
      <p class="title">
        من فضلك ادخل الرمز المرسل الي البريد <span>email@email.com </span>
      </p>

      <div class="input-field col-12">
        <div class="otp-container">
          <input
            class="otp-input"
            type="text"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]"
            required
          />
          <input
            class="otp-input"
            type="text"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]"
            required
          />
          <input
            class="otp-input"
            type="text"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]"
            required
          />
          <input
            class="otp-input"
            type="text"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]"
            required
          />
          <input
            class="otp-input"
            type="text"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]"
            required
          />
        </div>
      </div>

      <div class="resend-code">
        <a href="#!">اعادة ارسال الرمز</a>
        <div class="timer">
          <span>48</span> :<span>00</span>
        </div>
      </div>

      <button type="submit">تأكيد</button>
    </form>
  );
};

export default FormOTP;
