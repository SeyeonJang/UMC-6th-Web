import styled from 'styled-components';

function MusicComponent({title, singer, price, img}) {
    return(
        <Container>
            <Image src={img} alt={title}/>
            <TextWrapper>
                <TitleText>{title}</TitleText>
            </TextWrapper>
            <ButtonWrapper>

            </ButtonWrapper>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-contents: space-around;
    margin-top: 25px;
`;

const Image = styled.img`
    height: 100%;
    width: auto;
    object-fit: cover;
`;

const TextWrapper = styled.div`
    width: 60%;
    height: 20px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
`;

const TitleText = styled.p`
    font-size: 15px;
    font-weight: 500;
`;

const ButtonWrapper = styled.div`
    height: 100%;
    width: auto;
`;

export default MusicComponent