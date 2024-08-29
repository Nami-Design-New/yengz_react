import AppleSignin from "react-apple-signin-auth";
import Apple from "../../Assets/images/Apple.svg";

const AppleSigninButton = ({ t, handleAppleAuth }) => (
  <AppleSignin
    authOptions={{
      clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
      scope: "email name",
      redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URI,
      state: "state",
      nonce: "nonce",
      usePopup: true
    }}
    uiType="dark"
    buttonExtraChildren="Continue with Apple"
    onSuccess={(response) => handleAppleAuth(response)}
    onError={(error) => console.error(error)}
    skipScript={false}
    iconProp={{ style: { marginTop: "10px" } }}
    render={() => (
      <div className="auth_social_btn">
        <img src={Apple} alt="apple" /> {t("auth.appleAccount")}
      </div>
    )}
  />
);

export default AppleSigninButton;
