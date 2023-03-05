import { FaArrowUp } from 'react-icons/fa';
import styles from './BackToTopButton.module.css';
import { useState,useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleIsVisible() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleIsVisible);

    return () => {
      window.removeEventListener('scroll', toggleIsVisible);
    };
  }, []);

  return (
    <button
      className={styles['app__back-to-top-button']}
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
