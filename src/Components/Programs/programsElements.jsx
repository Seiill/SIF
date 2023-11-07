import { styled } from "styled-components";
import { variables } from "../../Util/themeModes";
import imgs from '../../assets/IMGS/programParallax.jpg'
import imgs2 from '../../assets/IMGS/programParallax.jpg'
import { mobile, tablet } from "../../responsive";
export const ParallaxWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  ${tablet({
    height: "100vh",
  })} 
  ${mobile({
    height: "100vh",
  })} 
`;


export const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imgs}); 
  background-size: cover;
  background-position: center;
  z-index: -1;
  transform: translateY(${(props) => props.offset * 0.5}px); /* Ajusta el valor para el efecto de parallax */
`;

export const ParallaxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  font-size: ${variables.mediumFont};
  color: ${variables.secondColor};
  font-weight: ${variables.boldFont};
  text-align: center;
  ${tablet({
    fontSize: "1.8rem",
  })}
  ${mobile({
    fontSize: "1.3rem",
  })}
`;
export const Section = styled.section`
width: 100%;
`
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 50px 0;
row-gap: 30px;
${tablet({
  flexDirection:"column",
  rowGap: "100px"
})}
`
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 35%;
background-color: ${({ theme }) => theme.card};
padding: ${variables.smallFont};
justify-content: space-between;
border-radius: 20px;
${tablet({
  width: "90%",
  margin: "auto"
})}
`

export const Imgs = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
border-radius: 10px;
` 
export const Title = styled.h2`
color: ${({ theme }) => theme.itextColor};
${mobile({
  fontSize:"1.3rem"
})}
`
export const Description = styled.p`
  white-space: wrap;
  font-size: ${variables.smallFont};
  color: ${({ theme }) => theme.itextColor};
`;

export const Description2 = styled.p`
font-size: ${variables.smallFont};
color: ${variables.secondColor};
`
export const Goal = styled.h4`
color:${({ theme }) => theme.title};
font-size: 28px;
${tablet({
  fontSize:"1.7rem"
})}
`
export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imgs2});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 3;
  margin-top: 150px;
  margin-left: 50px;
  width: 50%;
  ${tablet({
    width: "80%"
  })}
  ${mobile({
    marginTop: "100px"
  })}
`;

export const TexTitle = styled.h2`

font-size: calc(${variables.mediumFont});
color: ${variables.secondColor};
${mobile({
  fontSize:"1.3rem"
})}
`
export const SectionWrapper = styled.div`
position: relative;
height: 600px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  ${mobile({
    height: "100vh"
  })}
`