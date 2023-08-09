import React from 'react'
import icon1 from '../../assets/IMGS/heropng.jpg';
import { SectionHistory, Article, Description, ImageWrapper, Image, Title } from './blogElements';
import { Section, SectionWrapper, Wrapper, TextContainer, TexTitle, Description2 } from '../Programs/programsElements'
import{ Main} from '../mainElements'
const BlogC = () => {
  return (
  <Main>
   <SectionHistory>
   <Article>
      <Title>Bee Brave</Title>
      <Description><b>La Valiente Heroína de la Transformación</b></Description>
      <Description> En lo profundo de las sombras, donde el dolor y la incertidumbre danzan en una cruel sinfonía, se encuentra una valiente heroína llamada Bee Brave. Con tan solo 12 años, ha enfrentado más adversidades de las que cualquier alma joven debería soportar. Sus padres, prisioneros de un ciclo destructivo de peleas y desamor, han sido los testigos silenciosos de su sufrimiento desde su más tierna infancia. Pero en medio de la oscuridad, Bee Brave encontró el refugio en un mundo sombrío y peligroso: las drogas y el dolor físico. </Description>
      <Description>Sin embargo, un día, un rayo de esperanza iluminó su camino. Conoció a la Fundación SIF, donde los héroes anónimos dedicados a cambiar vidas extendieron su mano compasiva hacia ella. Desde ese momento, la historia de Bee Brave cambió para siempre. El abrazo cálido de la ayuda psicológica le mostró una nueva perspectiva, una imagen de sí misma que brillaba con valentía y fuerza.</Description>
      <Description>Con cada paso, Bee Brave comenzó a sanar, a restaurar su autopercepción y a liberarse del yugo de la adicción. Descubrió que dentro de su corazón había sueños y anhelos poderosos, una vida entera por vivir, aunque en un momento creyó que no tenía motivos para hacerlo. Se aferró a la oportunidad de renacer, de escribir una nueva historia llena de esperanza y realización.Cada día, se aferraba más a sus sueños: ser bailarina y actriz, o quizás una abogada para defender los derechos de aquellos que necesitan una voz. </Description>
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
        <TexTitle>¡Juntos, podemos lograrlo!</TexTitle>
        <Description2>Descubre cómo los héroes de SIF enfrentan sus luchas y encuentran la fuerza para triunfar. Juntos, podemos seguir escribiendo capítulos de esperanza y construir un futuro donde cada niño tenga la oportunidad de volar alto y ser protagonista de su propia epopeya. <b>¡Conoce más acerca de los héroes de SIF y sé parte de esta poderosa transformación!</b> </Description2>
        </TextContainer>
      </SectionWrapper>
    </Section>
  </Main>
    
  )
}

export default BlogC