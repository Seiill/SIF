import React, { useEffect, useRef, useState } from 'react';
import {withTranslation} from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18n from '../../Util/i18n';

import { Section, ImageContent,ImageDesc, Containerr, Container,Containers, Imgs, CardContent, Icon, Title,TitleDesc,Desc, Descr, Image, Stroke, Titles, TextContainer, Shape, TextContent } from './infoElents'
import {Main} from '../mainElements';
import Button from '../../Components/Button/Button'

import images from '../../assets/IMGS/youths.png'
import imagess from '../../assets/IMGS/imageDesc.jpg'
import { sixfeatured, feteauredCauses, changingLifes, infoItems} from '../../Util/es.json'
import { sixfeaturedEn, feteauredCausesEn, changingLifesEn, infoItemsEn} from '../../Util/en.json'

import restauracionImage from '../../Assets/IMGS/restauracion.svg';
import orientacionImage from '../../Assets/IMGS/orientacion.svg';
import transformacionImage from '../../Assets/IMGS/Transformacion.svg';
import liderazgoImage from '../../Assets/IMGS/liderazgo.svg';
import educacionImage from '../../Assets/IMGS/educacion.svg';
import compromisoImage from '../../Assets/IMGS/compromiso.svg';

import infoImage1 from '../../Assets/IMGS/transformadores.jpg';
import infoImage2 from '../../Assets/IMGS/unidadFamiliar.jpg';
import infoImage3 from '../../Assets/IMGS/empoderados.jpg';

const data = i18n.language === 'es' ? { sixfeatured, feteauredCauses, changingLifes, infoItems } : { sixfeatured: sixfeaturedEn, feteauredCauses: feteauredCausesEn, changingLifes: changingLifesEn, infoItems: infoItemsEn };

const InfoSection = ({ t }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const data = currentLanguage === 'es' ? { sixfeatured, feteauredCauses, changingLifes, infoItems } : { sixfeatured: sixfeaturedEn, feteauredCauses: feteauredCausesEn, changingLifes: changingLifesEn, infoItems: infoItemsEn };


  const loadIcon = (imageName) => {
    switch (imageName) {
      case 'restauracion.svg':
        return restauracionImage;
      case 'orientacion.svg':
        return orientacionImage;
      case 'Transformacion.svg':
        return transformacionImage;
      case 'liderazgo.svg':
        return liderazgoImage;
      case 'educacion.svg':
        return educacionImage;
      case 'compromiso.svg':
        return compromisoImage;
      default:
        return null;}}
  const loadImage = (imageName) => {
    switch (imageName) {
      case 'transformadores.jpg':
        return infoImage1;
      case 'unidadFamiliar.jpg':
        return infoImage2;
      case 'empoderados.jpg':
        return infoImage3;
      default:
        return null;}}
  
    const cardRef1 = useRef(null); 
    const cardRef2 = useRef(null); 
    

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    

    useEffect(() => {
        const handleScroll = () => {
          const cardPosition1 = cardRef1.current.getBoundingClientRect();
          const cardPosition2 = cardRef2.current.getBoundingClientRect();
          

          const windowHeight = window.innerHeight;

          if (cardPosition1.top < windowHeight && cardPosition1.bottom >= 0) {
            setIsVisible1(true);
          }
          if (cardPosition2.top < windowHeight && cardPosition2.bottom >= 0) {
            setIsVisible2(true);
          }
        };
        window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Main>
    <Section>
        <Container>
        {data.sixfeatured.map((item)=>(
            <CardContent ref={cardRef1} key={item.id}>
            <Icon src={loadIcon(item.icon)} $visible={isVisible1}/>
            <Stroke $visible={isVisible1} />
            <TitleDesc>{t(item.title)}</TitleDesc>
            <Desc>{t(item.description)}</Desc>
        </CardContent>
        ))}
        <Image src={images} alt="jovenes-trabajando-en-equipo"/>
        </Container>
    </Section>
    <Section>
        <Containers>
            {data.feteauredCauses.map((item)=>(
                <CardContent  key={item.id}>
                    <Imgs src={loadImage(item.img)} alt={item.title}  />
                    <Titles>{t(item.title)}</Titles>
                    <Descr>{t(item.description)}</Descr>
                </CardContent>
            ))}
        </Containers>
    </Section>
    
    <Section >
      <Containerr ref={cardRef2}>
      <ImageContent>
      <ImageDesc src={imagess}/>
      </ImageContent>
      <Shape $visible={isVisible2}></Shape>
      <TextContainer >
        <Titles>{t(data.infoItems.title)}.</Titles>
        {data.changingLifes.map((item)=>(
        <TextContent $visible={isVisible2} key={item.id}>
            <Title >{t(item.title)}</Title>
          <Descr>{t(item.description)}</Descr>
          <Button title={t(item.action)} path="/coffe-gif"/>
        </TextContent>
        

          ))}

      </TextContainer>
      </Containerr>
    </Section>
    </Main>
  )
}

export default withTranslation()(InfoSection);