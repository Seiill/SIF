import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';


import ColumnSection from '../ColumnsSection/ColumnSection';
import {aboutItems, columnData1, columnData2, columnData3, misonVision} from '../../Util/es.json';
import {aboutItemsEn, columnData1En, columnData2En, columnData3En, misonVisionEn} from '../../Util/en.json';
import {Main} from '../mainElements';
import {ParallaxWrapper, ParallaxBackground, ParallaxContent, Section, Container, CardContend, Title, Stroke, Subtitle, Description} from './aboutElements';

const About = ({ t }) => {
  const {i18n} = useTranslation();

  const currentLanguage = i18n.language;
  const data = currentLanguage === 'es' ? {
    aboutItems,
    columnData1,
    columnData2,
    columnData3,
    misonVision,
  } : {
    aboutItems: aboutItemsEn, 
    columnData1: columnData1En, 
    columnData2: columnData2En, 
    columnData3: columnData3En, 
    misonVision: misonVisionEn, 
  };

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
      {t(data.aboutItems.title)}
      </ParallaxContent>
      
    </ParallaxWrapper>
      <Section> 
        <ColumnSection data={data.columnData1} $reverse={false} showButton={false} />
        <ColumnSection data={data.columnData2} $reverse={true} showButton={false} />
</Section>
<Section> 
        
          <Container>
          {data.misonVision.map((item)=>(
            <CardContend key={item.id}>
              <Title>{t(item.title)}</Title>
              <Subtitle>{t(item.subtitle)}</Subtitle>
              <Stroke></Stroke>
              <Description>{t(item.description)}</Description>
              <></>
            </CardContend>
          ))}
          </Container>
          <ColumnSection data={data.columnData3} $reverse={false} actions={data.columnData3.action}  showButton={true}/>
        
</Section>
    </Main>
  )
}

export default withTranslation()(About);