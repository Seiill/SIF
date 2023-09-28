import React,{ useEffect, useRef } from 'react'
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';


import icon from '../../assets/IMGS/niño.png'
import icon2 from '../../assets/IMGS/absOne.png'
import icon3 from '../../assets/IMGS/abs2.png'
import icon4 from '../../assets/IMGS/abs3.png'
import {homeItems} from '../../Util/es.json'
import {homeItemsEn} from '../../Util/en.json'
import { Container, ImgOne, ImgTwo, Image, ImgThree,TextContainer,Text, SpanText, SpanOption  } from './heroElements';

const Hero = ({ t }) => {
  const {i18n} = useTranslation();
  
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
      imgThreeRef.current.style.transform = `translateY(${scroll * 0.6}px)`;
      imageRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentLanguage = i18n.language;

  const items = currentLanguage === 'es' ? homeItems : homeItemsEn;


  return (
    <>
      <Container>
        <ImgOne ref={imgOneRef} src={icon2} />
        <ImgTwo ref={imgTwoRef} src={icon3} />
        <ImgThree ref={imgThreeRef} src={icon4} />
        <TextContainer>
          <Text>
            <SpanOption $textspacing="6px">{t(items.oneTitle)}
             </SpanOption> <SpanOption $textspacing="3px">{t(items.twoTitle)}</SpanOption> 
            <br />
            <SpanText>{t(items.threeTitle)}</SpanText>
          </Text>
        </TextContainer>

        <Image ref={imageRef} src={icon} />
      </Container>
    </>
  );
};

export default withTranslation()(Hero);
