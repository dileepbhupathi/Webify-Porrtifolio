import React, { useEffect, useState } from 'react'
import './WebifyBackToTop.scss'
import {FaAngleUp} from 'react-icons/fa'

export const WebifyBackToTop = () => {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaAngleUp />
        </button>
      )}
    </div>
  )
}
