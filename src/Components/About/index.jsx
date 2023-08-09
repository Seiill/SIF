import React, { useEffect, useState } from 'react'
import ColumnSection from '../ColumnsSection/ColumnSection';
import { columnData1, columnData2, columnData3, misonVision} from '../../Util/data';
import {Main} from '../mainElements'
import {ParallaxWrapper, ParallaxBackground, ParallaxContent, Section, Container, CardContend, Title, Stroke, Subtitle, Description} from './aboutElements';
const About = () => {
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
        ¡Restauramos vidas, inspiramos futuros!
      </ParallaxContent>
      
    </ParallaxWrapper>
      <Section> 
        <ColumnSection data={columnData1} reverse={false} />
        <ColumnSection data={columnData2} reverse={true} />
</Section>
<Section> 
        
          <Container>
          {misonVision.map((item)=>(
            <CardContend>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <Stroke></Stroke>
              <Description>{item.description}</Description>
              <></>
            </CardContend>
          ))}
          </Container>
          <ColumnSection data={columnData3} reverse={false} />
        
</Section>
    </Main>
  )
}

export default About