import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BannerComponent() {
    const [name, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:8080/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.status === 200) {
                    setUserName(response.data.name);
                } else {
                    console.error('유저 정보 가져오기 실패:', response.status);
                }
            })
            .catch(error => {
                console.error('유저 정보 가져오기 오류:', error);
            })
        }
    }, []);

    return(
        <WelcomeContainer>
            {name ? `${name}님, Chacco의 Movie에 오신 걸 환영합니다 🥳` : 'Chacco의 Movie에 오신 걸 환영합니다 🥳'}
        </WelcomeContainer>
    );
}

const WelcomeContainer = styled.div`
    width: 100%;
    height: 15vh;
    background-color: rgb(19, 19, 19);
    margin: 0;
    color: white;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
`;

export default BannerComponent;