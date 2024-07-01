import React, { useEffect } from "react";

const Orbit3d = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "custom_orbit.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="globe">
      <canvas></canvas>
    </div>
  );
};

export default Orbit3d;
