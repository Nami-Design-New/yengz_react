import React from "react";
import Otpcontainer from "../../../ui/form-elements/OtpContainer";
import { useTranslation } from "react-i18next";

const ConfirmOtp = ({ otpData, setOtpData, formData }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/user/check_code", otpData);
      if (res.data.code === 200) {
        const register = await axios.post("/user/register", formData);
        if (register.data.code === 200) {
          toast.success(register.data.message);
          const login = await axios.post("/user/login", {
            email: formData.email,
            password: formData.password
          });
          if (login.data.code === 200) {
            navigate("/");
          } else {
            toast.error(login.data.message);
          }
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Forget password error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form lassName="container form" onSubmit={handleSubmit}>
      <Otpcontainer formData={otpData} setFormData={setOtpData} />
      <SubmitButton loading={loading} name={t("auth.createAccount")} />
    </form>
  );
};

export default ConfirmOtp;
