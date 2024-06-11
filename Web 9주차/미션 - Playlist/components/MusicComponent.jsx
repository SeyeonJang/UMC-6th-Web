import styled from 'styled-components';
import { ChevronDown, ChevronUp } from '../constants/icon'; 

function MusicComponent({title, singer, price, img}) {
    return(
        <Container>
            <Image src={img} alt={title}/>
            <TextWrapper>
                <TitleText>{title} | {singer}</TitleText>
                <SingerText>{price}원</SingerText>
            </TextWrapper>
            <ButtonContainer>
                <ChevronUp/>
                <ChevronDown/>
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-contents: space-between;
    margin-top: 25px;
    padding: 0; 
`;

const Image = styled.img`
    height: 100%;
    width: auto;
    object-fit: cover;
`;

const TextWrapper = styled.div`
    width: 60%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    overflow: ellipsis;
`;

const SingerText = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    color: grey;
    margin-top: 5px;
`;

const ButtonContainer = styled.div`
    height: 100%;
    width: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 180px;
`;

export default MusicComponent