import React from 'react'
import  icon1 from '../../assets/IMGS/insta.svg'
import  icon2 from '../../assets/IMGS/face.svg'
import  icon3 from '../../assets/IMGS/linked.svg'
import  icon4 from '../../assets/IMGS/location.svg'
import  icon5 from '../../assets/IMGS/phone.svg'
import  icon6 from '../../assets/IMGS/mobile.svg'
import  icon7 from '../../assets/IMGS/maiill.svg'
import { FooterContainer, Container, IconImage, SocialContainer, Title, IconContainer, Icon , Important, LinksContainer, ContactContainer, ContactItems,InfoWrap, Links, Desc } from './footerElements'
const Footer = () => {
  return (
    <FooterContainer>
    <Container>
        <SocialContainer>
            <Title>Visitanos</Title>
            <IconContainer>
                <Icon target="_blank" rel="noopener noreferrer" to ="https://www.instagram.com/findesin.fundacion/"><IconImage src={icon1} /></Icon> 
                <Icon target="_blank" rel="noopener noreferrer" to ="https://www.instagram.com/findesin.fundacion/"><IconImage src={icon2} /></Icon> 
                <Icon target="_blank" rel="noopener noreferrer" to ="https://www.instagram.com/findesin.fundacion/"><IconImage src={icon3} /></Icon> 
            </IconContainer>
        </SocialContainer>
        <Important>
            <LinksContainer>
            <Links to="/privacyPolicy">Políticas de privacidad</Links>
            <Links to="/termsConditions">Terminos y condiciones</Links>
            </LinksContainer>
            <LinksContainer>
            <Links to="/nosotros">Nosotros</Links>
            <Links to="/programas">Programas</Links>
            <Links to="/Histories">Historias</Links>
            </LinksContainer>

        </Important>
        <ContactContainer>
            <ContactItems>
            <Icon target="/"><IconImage src={icon4} /></Icon>               
                <InfoWrap>
                <Title>Dirección</Title>
                <Desc>Cll 53 # 74A - 29</Desc>
                </InfoWrap>
            </ContactItems>
            <ContactItems>
            <Icon target="/"><IconImage src={icon5} /></Icon>                
                <InfoWrap>
                <Title>Teléfono</Title>
                <Desc>+601 2634531</Desc>
                </InfoWrap>
            </ContactItems>
            <ContactItems>
            <Icon target="_blank" rel="noopener noreferrer" to ="/"><IconImage src={icon6} /></Icon>                
            <InfoWrap>
                <Title>Celular</Title>
                <Desc>+57 123456789</Desc>
                </InfoWrap>
            </ContactItems>
            <ContactItems>
            <Icon target="_blank" rel="noopener noreferrer" to ="/"><IconImage src={icon7} /></Icon>                
            <InfoWrap>
                <Title>Email</Title>
                <Desc>info@sif.com</Desc>
                </InfoWrap>
            </ContactItems>
        </ContactContainer>

    </Container>
    </FooterContainer>
  )
}

export default Footer