import styled from 'styled-components';
import { variables } from '../../Util/themeModes';

export const SectionHistory = styled.section`
width: 100%;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
`
export const Article = styled.article`
width: 40%;
`
export const Description = styled.p`
font-size: ${variables.smallFont};
color: ${({ theme }) => theme.textColor};
`
export const ImageWrapper = styled. div`
width: 40%;
`
export const Image = styled.img`
width: 100%;
object-fit: cover;
`
export const Title = styled.h2`
color:  ${({ theme }) => theme.title};
font-size: ${variables.mediumFont};
`