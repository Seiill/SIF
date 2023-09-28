import React,{useEffect, useState} from 'react';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next'; 
import Button from '../../Components/Button/Button';
import { ParallaxBackground, ParallaxWrapper, ParallaxContent , Section, Container, CardContainer, Imgs, Title, Description, Description2, Goal, Wrapper, TextContainer, TexTitle, SectionWrapper } from './programsElements'
import {programsC, programsDonation } from '../../Util/es.json';
import {programsCEn, programsDonationEn } from '../../Util/en.json';
import {Main} from '../mainElements'

import pd1 from "../../Assets/IMGS/pD1.jpeg";
import pd2 from "../../Assets/IMGS/pD2.jpg";  
import pd3 from "../../Assets/IMGS/pD3.jpeg"; 
import pd4 from '../../Assets/IMGS/pD4.jpeg';
const Programas = ({ t }) => {
  const { i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const data = currentLanguage === 'es' ? { programsC, programsDonation } : { programsC: programsCEn, programsDonation: programsDonationEn };

  const loadImage = (imageName) => {
    switch (imageName) {
      case 'pD1.jpeg':
        return pd1;
      case 'pD2.jpg':
        return pd2;
      case 'pD3.jpeg':
        return pd3;
      case 'pD4.jpeg':
        return pd4;
      default:
        return null;}}
    const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Main>
    <ParallaxWrapper>
      <ParallaxBackground offset={scrollOffset} />
      <ParallaxContent>
        {t(data.programsC.title)}
      </ParallaxContent>
    </ParallaxWrapper>
    <Section>
      <Container>
        {data.programsDonation.map((item)=>(
          <CardContainer key={item.id}>
          <Imgs src={loadImage(item.img)} alt={item. title}/>
          <Title>{t(item.title)}</Title>
          <Description>{t(item.description)}</Description>
          <Goal>{t(data.programsC.goalText)} {item.goal}</Goal>
        </CardContainer>
        ))}
      </Container>
    </Section>
    <Section>
      <SectionWrapper>
      <Wrapper>
        
      </Wrapper>
      <TextContainer>
        <TexTitle>{t(data.programsC.text)}</TexTitle>
        <Description2>{t(data.programsC.desc)}</Description2>
        <Button title={t(data.programsC.action)} path="/coffe-gif"/>
        </TextContainer>
        
      </SectionWrapper>
    </Section>
    </Main>
  )
}

export default withTranslation()(Programas)