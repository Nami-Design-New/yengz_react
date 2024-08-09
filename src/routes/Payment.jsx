import React, { useRef } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";

const Payment = () => {
  const iframeRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;

  const onLoadIframe = () => {
    const iframeSrc = iframeRef.current.contentWindow.document.href;
    console.log("Current iframe URL:", iframeSrc);

    if (iframeSrc.includes("failed") || iframeSrc.includes("paid")) {
      window.history.back();
    }
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        id="payment-iframe"
        src={`https://api.ynjez.com/payment/${searchParams.get(
          "charge"
        )}/?token=${token}`}
        width="100%"
        height="500px"
        title="Embedded Content"
        onLoad={onLoadIframe}
      />
    </div>
  );
};

export default Payment;
