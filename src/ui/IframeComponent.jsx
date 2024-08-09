import React, { useState, useRef, useEffect } from "react";

const IframeComponent = ({ token, url, onLoadCallback }) => {
  const [iframeUrl, setIframeUrl] = useState(""); // State to manage iframe URL
  const iframeRef = useRef(null); // Ref to access iframe DOM element

  useEffect(() => {
    if (url) {
      const headers = {
        Authorization: `Bearer ${token}`
      };

      // Construct the final URL with headers
      const finalUrl = new URL(url);
      Object.keys(headers).forEach((key) => {
        finalUrl.searchParams.append(key, headers[key]);
      });

      // Set iframe URL
      setIframeUrl(finalUrl.toString());
    }
  }, [url, token]);

  // Handle iframe URL change detection
  const handleIframeLoad = () => {
    const currentUrl = iframeRef.current.contentWindow.location.href;
    console.log("Current iframe URL:", currentUrl);

    // Check if the URL contains "paid"
    if (currentUrl.includes("paid")) {
      console.log('Link contains "paid".');
      if (onLoadCallback) onLoadCallback();
    }
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={iframeUrl}
        width="100%"
        height="500px"
        onLoad={handleIframeLoad}
        title="Embedded Content"
      />
    </div>
  );
};

export default IframeComponent;
