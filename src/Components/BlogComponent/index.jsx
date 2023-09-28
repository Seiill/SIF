import React from 'react'
import { withTranslation } from 'react-i18next';  
import { useTranslation } from 'react-i18next'; 

import icon1 from '../../assets/IMGS/heropng.jpg';
import Button from '../../Components/Button/Button';
import {blogData} from '../../Util/es.json'
import {blogDataEn} from '../../Util/en.json'
import { SectionHistory, Article, Description, ImageWrapper, Image, Title } from './blogElements';
import { Section, SectionWrapper, Wrapper, TextContainer, TexTitle, Description2 } from '../Programs/programsElements'
import{ Main} from '../mainElements'
const BlogC = ({ t }) => {
  const { i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const data = currentLanguage === 'es' ? blogData : blogDataEn; 
  return (
  <Main>
   <SectionHistory>
   <Article>
          <Title>{t(data.title)}</Title>
          {data.description.map((paragraph, index) => (
            <Description key={index}>{t(paragraph)}</Description>
          ))}
          <br />
    </Article>
    <ImageWrapper>
      <Image src={icon1}/>
    </ImageWrapper>
   </SectionHistory>
    
    <Section>
      <SectionWrapper>
      <Wrapper>
        
      </Wrapper>
      <TextContainer>
        <TexTitle>{t(data.txtTitle)}</TexTitle>
        <Description2>{t(data.txtDesc)}</Description2>
        <Button title={t(data.action)} path="/coffe-gif"/>
        </TextContainer>
      </SectionWrapper>
    </Section>
  </Main>
    
  )
}

export default withTranslation()(BlogC);