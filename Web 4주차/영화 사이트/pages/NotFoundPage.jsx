import styled from 'styled-components';

function NotFoundPage() {
    return(
        <Wrapper>
            <h2>Ooops!</h2>
            <h4>예상치 못한 에러가 발생했습니다 Σ(O_O)</h4>
            <h4>Not Found . . . </h4>
            <Button>메인으로 이동하기</Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const Button = styled.button`
    margin-top: 20px;
`;

export default NotFoundPage;