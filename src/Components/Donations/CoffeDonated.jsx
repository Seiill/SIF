import React, {useContext} from 'react'
import { useTranslation } from 'react-i18next'; 
import {withTranslation} from 'react-i18next';

import icon from '../../assets/IMGS/coffeGiff.svg';

import {coffeItems,coffeeOptions, buttonEs} from '../../Util/es.json';
import {coffeItemsEn,coffeeOptionsEn, buttonEn} from '../../Util/en.json';

import Button from '../../Components/Button/Button';
import {Container,Wrapper, Desc, Subtitle, Text,CardContent, Icon, Title, Price} from'./coffeDonatedElements';
import {Main} from '../mainElements';

import {useCart} from '../CartContext';

const CoffeDonated = ({t}) => {
    const { i18n } = useTranslation();
    const {addToCart} = useCart();
   
    const currentLanguage = i18n.language;
    const data = currentLanguage === 'es' ? { ...coffeItems, options: coffeeOptions, button: buttonEs} : { ...coffeItemsEn, options: coffeeOptionsEn, button: buttonEn };
    
    const createMarkup = (html) => ({ __html: html });
    
  return (
    
    <Main>
    <Container>
        <Text>
        
        <Subtitle>{t(data.title)}</Subtitle>
        <Desc dangerouslySetInnerHTML={createMarkup(t(data.desc))} />
        </Text>
        <Wrapper>
      {data.options.map((option) => (
        <CardContent key={option.id}>
          <Icon src={icon} />
          <Title>{t(option.title)}</Title>
          <Price>{t(option.price)}</Price>
          
          <Button title={t(data.button.title)} path={option.path} e={() => {
              addToCart({
                id: option.id,
                title: t(option.title),
                price: t(option.price),});
                }} />
        </CardContent>
      ))}
    </Wrapper>
    </Container>
    </Main>
  )
};

export default withTranslation()(CoffeDonated);