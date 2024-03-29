import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { useDeviceDetection } from "../../hooks/useDeviceDetection";

function MagneticButton({ children }) {
  // const deviceType = useDeviceDetection();
  const magneticButtonRef = useRef(null);

  useEffect(() => {
    const xMove = gsap.quickTo(magneticButtonRef.current, "x", { duration: 0.6, ease: "elastic.out(1, 0.7)" });
    const yMove = gsap.quickTo(magneticButtonRef.current, "y", { duration: 0.6, ease: "elastic.out(1, 0.7)" });

    magneticButtonRef.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = magneticButtonRef.current.getBoundingClientRect();
      xMove((clientX - (left + width / 2)) * 0.8);
      yMove((clientY - (top + height / 2)) * 0.8);
    });

    magneticButtonRef.current.addEventListener("mouseleave", () => {
      xMove(0);
      yMove(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magneticButtonRef });
}

export default MagneticButton;
