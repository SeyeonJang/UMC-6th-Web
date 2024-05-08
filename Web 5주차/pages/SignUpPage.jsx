import styled from 'styled-components';
import { useState } from 'react';

function SignUpPage() {
    const [isActive, setIsActive] = useState(true);

    return(
        <Container>
            <SignupContainer>
                <MainText>회원가입 페이지</MainText>
                <FormWrapper>
                    <InputBox type="text" id="name" placeholder="이름을 입력해주세요!"/>
                    <AlertText></AlertText>
                    <InputBox type="text" id="email" placeholder="이메일을 입력해주세요!"/>
                    <InputBox type="number" id="age" placeholder="나이를 입력해주세요!"/>
                    <InputBox type="password" id="pw" placeholder="비밀번호를 입력해주세요!"/>
                    <InputBox type="password" id="pw2" placeholder="비밀번호 확인"/>
                    <SubmitButton>제출하기</SubmitButton>
                </FormWrapper>
                <SubTextWrapper>
                    <SubText1>이미 아이디가 있으신가요?</SubText1>
                    <SubText2>로그인 페이지로 이동하기</SubText2>
                </SubTextWrapper>
            </SignupContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
`;

const SignupContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainText = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: white;
`;

const FormWrapper = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 60%;
    height: 30px;
    margin-top: 35px;
    border: 2px solid white;
    border-radius: 20px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: orange;
`;

const AlertText = styled.div`
    width: 64%;
    color: red;
    margin: 5px 0px 0px 0px;
    padding-left: 25px;
`;

const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    background-color: orange;
    // background-color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    border-radius: 23px;
    font-size: 17px;
    margin-top: 40px;
`;

const SubTextWrapper = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
`;

const SubText1 = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: white;
`;

const SubText2 = styled.p`
    font-size: 17px;
    font-weight: 700;
    color: white;
`;

export default SignUpPage;