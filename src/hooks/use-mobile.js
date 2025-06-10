// useIsMobile: Custom React hook to detect if the current device is mobile based on window width.
import React from "react";

// MOBILE_BREAKPOINT: The pixel width below which the device is considered mobile.
const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  // isMobile: State to track if the device is mobile.
  const [isMobile, setIsMobile] = React.useState(undefined);

  React.useEffect(() => {
    // mql: MediaQueryList for the mobile breakpoint.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    // onChange: Updates isMobile state when the window size changes.
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

export { useIsMobile }; // useIsMobile: Returns true if the device is mobile, false otherwise.
