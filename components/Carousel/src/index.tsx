import React from 'react';
import styles from './Carousel.css';

interface Props {
  slides: {
    url: string;
    title: string;
  }[];
  children: React.ReactChildren;
}

/** A simple component. */
export const Carousel = ({ slides, children }: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const length = slides.length;

  return (
    <div className={styles.container}>
      <div>
        <span className={`${styles.sideControl} ${styles.rightIcon}`}></span>
        <span className={`${styles.sideControl} ${styles.leftIcon}`}></span>
      </div>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`
        }}
        className={styles.sliderImage}
      ></div>
      {children}
      <div className={styles.paginationContainer}></div>
    </div>
  );
};
