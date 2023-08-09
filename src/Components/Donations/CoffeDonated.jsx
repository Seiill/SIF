import React from 'react'
import Button from '../../Components/Button/Button'
import icon from '../../assets/IMGS/coffeGiff.svg'
import {Container,Wrapper, Desc, Subtitle, Text,CardContent, Icon, Title, Price} from'./coffeDonatedElements'
import {Main} from '../mainElements'
const CoffeDonated = () => {
  return (
    <Main>
    <Container>
        <Text>
                
                <Subtitle>Un Café, un Gestor de Cambios</Subtitle>
                <Desc>Tu pequeña acción puede marcar una gran diferencia. Con solo el costo de un café, puedes apoyar nuestros programas y ser parte del cambio en la vida de niños y jóvenes en situaciones de vulnerabilidad. ¡Dona ahora y forma parte de esta hermosa sinfonía de transformación y esperanza que juntos creamos en la Fundación SIF! Cada café que donas es una nota que construye un futuro mejor para aquellos que más lo necesitan. <b>¡Únete a nuestra comunidad de héroes y siembra amor y esperanza en corazones que anhelan un mundo lleno de oportunidades!</b></Desc>
        </Text>
        <Wrapper>
            
            <CardContent>
                <Icon src={icon} />
                <Title>Café para un día</Title>
                <Price>$10.000</Price>
                <Button title="Donar" path="/cart"/>
            </CardContent>
            <CardContent>
                <Icon src={icon} />
                <Title>Café para el mes</Title>
                <Price>$100.000</Price>
                <Button title="Donar" path="/cart"/>
            </CardContent>
            <CardContent>
                <Icon src={icon} />
                <Title>Café para el año</Title>
                <Price>$1.000.000</Price>
                <Button title="Donar" path="/cart"/>
            </CardContent>
        </Wrapper>
    </Container>
    </Main>
  )
}

export default CoffeDonated