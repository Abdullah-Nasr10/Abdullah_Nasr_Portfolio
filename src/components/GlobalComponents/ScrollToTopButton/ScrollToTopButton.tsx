import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      className="scroll-top-btn position-fixed rounded-circle border-0 center text-white"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
