import AppleSignin from "react-apple-signin-auth";

const AppleSigninButton = () => (
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
    className="apple-auth-btn"
    buttonExtraChildren="Continue with Apple"
    onSuccess={(response) => console.log(response)}
    onError={(error) => console.error(error)}
    skipScript={false}
    iconProp={{ style: { marginTop: "10px" } }}
    render={(props) => <button {...props}>My Custom Button</button>}
  />
);

export default AppleSigninButton;
