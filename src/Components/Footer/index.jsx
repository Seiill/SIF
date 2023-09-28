import React from 'react';
import {withTranslation} from 'react-i18next';
import { useTranslation } from 'react-i18next';

import  icon1 from '../../assets/IMGS/insta.svg'
import  icon2 from '../../assets/IMGS/face.svg'
import  icon3 from '../../assets/IMGS/linked.svg'
import  icon4 from '../../assets/IMGS/location.svg'
import  icon5 from '../../assets/IMGS/phone.svg'
import  icon6 from '../../assets/IMGS/mobile.svg'
import  icon7 from '../../assets/IMGS/maiill.svg'
import {footerItems} from '../../Util/es.json'
import {footerItemsEn} from '../../Util/en.json'

import { FooterContainer, Container, IconImage, SocialContainer, Title, IconContainer, Icon , Important, LinksContainer, ContactContainer, ContactItems,InfoWrap, Links, Desc } from './footerElements'
const Footer = () => {
    const {t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const data = currentLanguage === 'es' ? footerItems : footerItemsEn;
  return (
    <FooterContainer>
    <Container>
        <SocialContainer>
            <Title>{t(data.socialTitle)}</Title>
            <IconContainer>
                <Icon target="_blank" rel="noopener noreferrer" to ="https://www.instagram.com/findesin.fundacion/"><IconImage src={icon1} /></Icon> 
                <Icon target="_blank" rel="noopener noreferrer" to ="https://www.instagram.com/findesin.fundacion/"><IconImage src={icon2} /></Icon> 
                <Icon target="_blank" rel="noopener noreferrer" to ="https://www.instagram.com/findesin.fundacion/"><IconImage src={icon3} /></Icon> 
            </IconContainer>
        </SocialContainer>
        <Important>
            <LinksContainer>
            <Links to="/privacyPolicy">{t(data.policy)}</Links>
            <Links to="/termsConditions">{t(data.terms)}</Links>
            </LinksContainer>
            <LinksContainer>
            <Links to="/nosotros">{t(data.aboutUs)}</Links>
            <Links to="/programas">{t(data.programs)}</Links>
            <Links to="/Histories">{t(data.stories)}</Links>
            </LinksContainer>

        </Important>
        <ContactContainer>
            <ContactItems>
            <Icon target="/"><IconImage src={icon4} /></Icon>               
                <InfoWrap>
                <Title>{t(data.addres)}</Title>
                <Desc>Cll 53 # 74A - 29</Desc>
                </InfoWrap>
            </ContactItems>
            <ContactItems>
            <Icon target="/"><IconImage src={icon5} /></Icon>                
                <InfoWrap>
                <Title>{t(data.phone)}</Title>
                <Desc>+601 2634531</Desc>
                </InfoWrap>
            </ContactItems>
            <ContactItems>
            <Icon target="_blank" rel="noopener noreferrer" to ="/"><IconImage src={icon6} /></Icon>                
            <InfoWrap>
                <Title>{t(data.mobile)}</Title>
                <Desc>+57 123456789</Desc>
                </InfoWrap>
            </ContactItems>
            <ContactItems>
            <Icon target="_blank" rel="noopener noreferrer" to ="/"><IconImage src={icon7} /></Icon>                
            <InfoWrap>
                <Title>{t(data.email)}</Title>
                <Desc>info@sif.com</Desc>
                </InfoWrap>
            </ContactItems>
        </ContactContainer>

    </Container>
    </FooterContainer>
  )
}

export default withTranslation()(Footer);