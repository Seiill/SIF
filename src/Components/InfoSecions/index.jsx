import React,{ useEffect, useRef, useState }  from 'react'
import images from '../../assets/IMGS/youths.png'
import imagess from '../../assets/IMGS/imageDesc.jpg'
import { sixfeatured, feteauredCauses, changingLifes} from '../../Util/data'
import { Section, ImageContent,ImageDesc, Containerr, Container,Containers, Imgs, CardContent, Icon, Title,TitleDesc,Desc, Descr, Image, Stroke, Titles, TextContainer, Shape, TextContent } from './infoElents'
import {Main} from '../mainElements'

const InfoSection = () => {
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
        {sixfeatured.map((item)=>(
            <CardContent ref={cardRef1} key={item.id}>
            <Icon src={item.icon} visible={isVisible1}/>
            <Stroke visible={isVisible1} />
            <TitleDesc>{item.title}</TitleDesc>
            <Desc>{item.description}</Desc>
        </CardContent>
        ))}
        <Image src={images} alt="jovenes-trabajando-en-equipo"/>
        </Container>
    </Section>
    <Section>
        <Containers>
            {feteauredCauses.map((item)=>(
                <CardContent  key={item.id}>
                    <Imgs src={item.img} alt={item.title}  />
                    <Titles>{item.title}</Titles>
                    <Descr>{item.description}</Descr>
                </CardContent>
            ))}
        </Containers>
    </Section>
    
    <Section >
      <Containerr ref={cardRef2}>
      <ImageContent>
      <ImageDesc src={imagess}/>
      </ImageContent>
      <Shape visible={isVisible2}></Shape>
      <TextContainer >
        <Titles>Juntos podemos cambiar vidas.</Titles>
        {changingLifes.map((item)=>(
        <TextContent visible={isVisible2} key={item.id}>
            <Title >{item.title}</Title>
          <Descr>{item.description}</Descr>
        </TextContent>

          ))}

      </TextContainer>
      </Containerr>
    </Section>
    </Main>
  )
}

export default InfoSection