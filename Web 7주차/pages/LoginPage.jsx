import styled from 'styled-components';
import { useState, useEffect } from 'react';

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        setIdError(!id ? '아이디를 입력해주세요!' : '');
        setPasswordError(
            !password ? '비밀번호를 입력해주세요!' :
            password.length < 4 ? '비밀번호는 최소 4자리 이상 입력해주세요.' :
            password.length > 12 ? '비밀번호는 최대 12자리 입니다.' :
            !/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password) ? '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.' : ''
        );
    }, [id, password, idError, passwordError]);

    return(
        <Container>
            <LoginContainer>
                <MainText>로그인 페이지</MainText>
                <FormWrapper>
                    <InputBox type="text" id="login-id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
                    {idError && <AlertText>{idError}</AlertText>}
                    <InputBox type="password" id="login-pw" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {passwordError && <AlertText>{passwordError}</AlertText>}
                    <SubmitButton>로그인</SubmitButton>
                </FormWrapper>
            </LoginContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
`;

const LoginContainer = styled.div`
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
margin-top: 25px;
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


export default LoginPage;