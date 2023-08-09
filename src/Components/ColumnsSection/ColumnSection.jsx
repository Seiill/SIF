import React from 'react';
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
          </ContentColumn>
        </Container>
      );
    };

export default ColumnSection