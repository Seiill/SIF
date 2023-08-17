import React from 'react';
import Button from '../../Components/Button/Button';
import { Container,  ImageColumn, Image, ContentColumn, Title, Description} from './elements'
const ColumnSection = ({ data, reverse }) => {
    return (
        <Container reverse={reverse}>
          <ImageColumn>
            <Image src={data.image} alt={data.title} />
          </ImageColumn>
          <ContentColumn>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <Button title="Donar" path="/coffe-gif"/>
          </ContentColumn>
        </Container>
      );
    };

export default ColumnSection