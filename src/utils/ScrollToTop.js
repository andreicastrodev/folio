import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Use smooth scrolling behavior
    });
  };

  useEffect(() => {
    scrollToTop(); // Scroll to top when component mounts or pathname changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
