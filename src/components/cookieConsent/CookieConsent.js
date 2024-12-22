import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsent = () => {
  return (
    <div className="App">
      {/* Other components or app content */}

      {/* Cookie Consent Banner */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="userCookieConsent"
        style={{
          background: "#333",
          color: "white",
          fontSize: "14px",
          padding: "15px",
          textAlign: "center",
        }}
        buttonStyle={{
          background: "#4e9c4e",
          color: "#fff",
          fontSize: "13px",
          padding: "10px",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
        expires={365}
        onAccept={() => {
          console.log("User accepted cookies");
          // Load non-essential cookies, e.g., analytics
        }}
      >
        We use cookies to enhance your experience. By continuing, you agree to our <a href="/privacy-policy" style={{ color: "#00aaff" }}>Privacy Policy</a>.
      </CookieConsent>
    </div>
  );
};

export default CookieConsent;
