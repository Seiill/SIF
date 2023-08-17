import React,{useEffect, useState} from 'react'
import Button from '../../Components/Button/Button';
import { ParallaxBackground, ParallaxWrapper, ParallaxContent , Section, Container, CardContainer, Imgs, Title, Description, Description2, Goal, Wrapper, TextContainer, TexTitle, SectionWrapper } from './programsElements'
import { programsDonation } from '../../Util/data';
import {Main} from '../mainElements'
const Programas = () => {
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
        ¡Juntos por un futuro brillante!
      </ParallaxContent>
    </ParallaxWrapper>
    <Section>
      <Container>
        {programsDonation.map((item)=>(
          <CardContainer key={item.id}>
          <Imgs src={item.img} alt={item. title}/>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <Goal>meta anual: {item.goal}</Goal>
        </CardContainer>
        ))}
      </Container>
    </Section>
    <Section>
      <SectionWrapper>
      <Wrapper>
        
      </Wrapper>
      <TextContainer>
        <TexTitle>¡Juntos, podemos lograrlo!</TexTitle>
        <Description2>Cada uno de estos programas tiene una meta de recaudación específica para lograr su implementación y asegurar que podamos brindar el apoyo necesario a los niños y jóvenes en situación de vulnerabilidad. Tu generosidad y compromiso en alcanzar estas metas nos permitirán seguir marcando una diferencia significativa en la vida de quienes atendemos y contribuir a la transformación positiva de la comunidad. </Description2>
        <Button title="Donar" path="/coffe-gif"/>
        </TextContainer>
        
      </SectionWrapper>
    </Section>
    </Main>
  )
}

export default Programas