import { styled } from "styled-components";
import { variables } from "../../Util/themeModes";
import { tablet } from "../../responsive";
export const Container = styled.div`
width: 100%;
`
export const Wrapper= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
${tablet({
    flexDirection: "column",
    rowGap: "60px"
})}
`
export const CardContent = styled.div`
width: 20%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
${tablet({
    width: "50%",
    height: "auto",
    margin: "auto"
})}

`
export const Icon = styled.img`
width: 50%:
`
export const Title = styled.h3`
color:${({ theme }) => theme.textColor};

`
export const Price = styled.h5`
color: ${({ theme }) => theme.textColor};
font-size: ${variables.smallFont};

`
export const Caption = styled.h1`
font-size: ${variables.bigFont};
color: ${variables.secondColor};
`
export const Text = styled.div`
width: 90%;
margin: auto;
display: flex;
align-items: center;
flex-direction: column;
padding: 3rem 0;
`
export const Subtitle = styled.h2`
font-size: ${variables.mediumFont};
color: ${({ theme }) => theme.textColor};
${tablet({
    fontSize: "2rem",
    paddingTop: "10px"
})}
`
export const Desc = styled.p`
width: 80%;
font-size: ${variables.smallFont};
color: ${({ theme }) => theme.textColor};
`