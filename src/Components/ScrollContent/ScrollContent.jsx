import React,  { useEffect, useRef } from "react";
import { StyledContent, StyledImage } from "./scrollElements";
const ScrollContent = ({image, image1}) => {
    const sliderImagesRef = useRef([]);

  useEffect(() => {
    const sliderImages = sliderImagesRef.current;
    const checkSlide = () => {
      sliderImages.forEach((sliderImage) => {
        const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', checkSlide);
    return () => {
      window.removeEventListener('scroll', checkSlide);
    };
  }, []);
    return (
      <StyledContent>
        
        <StyledImage ref={(el) => (sliderImagesRef.current[0] = el)} src={image} className="align-left slide-in" alt="Imagen 1" />
        <StyledImage ref={(el) => (sliderImagesRef.current[1] = el)} src={image1} className="align-right slide-in" alt="Imagen 2" />
      </StyledContent>
    );
  };
  
  export default ScrollContent;