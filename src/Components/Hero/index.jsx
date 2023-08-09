import React,{ useEffect, useRef } from 'react'
import icon from '../../assets/IMGS/niño.png'
import icon2 from '../../assets/IMGS/absOne.png'
import icon3 from '../../assets/IMGS/abs2.png'
import icon4 from '../../assets/IMGS/abs3.png'
import { Container, ImgOne, ImgTwo, Image, ImgThree,TextContainer,Text, SpanText  } from './heroElements';

const Hero = () => {
  const imgOneRef = useRef(null);
  const imgTwoRef = useRef(null);
  const imgThreeRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      const translateElements = [imgOneRef.current, imgTwoRef.current, imgThreeRef.current, imageRef.current];
    translateElements.forEach(element => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;
    });
      imgOneRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
      imgTwoRef.current.style.transform = `translateY(${scroll * 0.2}px)`;
      imgThreeRef.current.style.transform = `translateY(${scroll * 0.1}px)`;
      imageRef.current.style.transform = `translateY(${scroll * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <ImgOne ref={imgOneRef} src={icon2} />
        <ImgTwo ref={imgTwoRef} src={icon3} />
        <ImgThree ref={imgThreeRef} src={icon4} />
        <TextContainer>
          <Text>
            Construyendo Futuros increibles para personas
            <br />
            <SpanText>extraordinarias</SpanText>
          </Text>
        </TextContainer>

        <Image ref={imageRef} src={icon} />
      </Container>
    </>
  );
};

export default Hero;
