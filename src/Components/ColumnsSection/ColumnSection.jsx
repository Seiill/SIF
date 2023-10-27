import React from 'react';
import Button from '../../Components/Button/Button';
import { Container,  ImageColumn, Image, ContentColumn, Title, Description} from './elements'
import columnImage1 from '../../assets/IMGS/sinlucro.jpeg';
import columnImage2 from '../../assets/IMGS/forte.jpeg';
import columnImage3 from '../../assets/IMGS/unete.jpeg';
const loadImage = (imageName) => {
  switch (imageName) {
    case 'sinlucro.jpeg':
      return columnImage1;
    case 'forte.jpeg':
      return columnImage2;
    case 'unete.jpeg':
      return columnImage3;
    default:
      return null;}}
const ColumnSection = ({ data, reverse, showButton, actions }) => {
    return (
        <Container $reverse={reverse}>
          <ImageColumn>
            <Image src={loadImage(data.image)} alt={data.title} />
          </ImageColumn>
          <ContentColumn>
            <Title>{data.title}</Title>


            <Description>{data.description}</Description>
            {showButton && <Button title={actions} path="/coffe-gif" />}
            
          </ContentColumn>
        </Container>
      );
    };

export default ColumnSection