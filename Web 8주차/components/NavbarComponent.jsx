import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import media from '../styles/media';
import MenuIcon from '../src/assets/menu.png';

// Styled components
const Navbar = styled.div`
    width: 100vw;
    height: 50px;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px;
    margin: 0px;
`;

const MainText = styled.p`
    margin: 0px;
    color: white;
    padding-left: 20px;

    ${media.mobile`
        font-size: 15px;
        width: 200px;
    `}
`;

const MenuBox = styled.div`
    width: 600px;
    flex-direction: row;
    display: flex;
    justify-content: end;
    padding-right: 20px;
`;

const LoginText = styled.p`
    margin: 0px;
    padding: 0px 10px;
    font-size: 17px;
    color: orange;
    &:hover {
        color: orange;
        font-size: 17.5px;
        font-weight: 600;
    }
`;

const MenuText = styled.p`
    margin: 0px;
    padding: 0px 10px;
    color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    font-size: 17px;
    &:hover {
        color: orange;
        font-size: 17.5px;
        font-weight: 600;
    }
`;

function NavbarComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(windowWidth < 1080);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobileOrTablet(window.innerWidth < 1080);
        };
        window.addEventListener('resize', handleResize);
        // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchUserData = () => {
            if (token) {
                axios.get('http://localhost:8080/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        setIsLoggedIn(true);
                        // setUserName(response.data.name);
                    } else {
                        console.error('유저 정보 가져오기 실패:', response.status);
                        setIsLoggedIn(false);
                    }
                })
                .catch(error => {
                    setIsLoggedIn(false);
                    console.error('유저 정보 가져오기 오류:', error);
                });
            } else {
                setIsLoggedIn(false);
            }
        };
        fetchUserData();
    });

    const handleLoginClick = () => {
        if (isLoggedIn) {
            localStorage.removeItem('token');
        }
        fetchUserData();
        setIsLoggedIn(!isLoggedIn);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <Navbar>
            <Link to="/popular-page"><MainText>UMC Chacco Movie</MainText></Link>
            <MenuBox>
                {isMobileOrTablet 
                ? 
                    <img src={MenuIcon} alt="loading" width="15px" height="15px" color='white'/>
                :
                <>
                {isLoggedIn ? (
                    <LoginText onClick={handleLoginClick}>로그아웃</LoginText>
                ) : (
                    <>
                        <Link to="/login"><LoginText onClick={handleLoginClick}>로그인</LoginText></Link>
                        <Link to="/signup"><MenuText isActive={activeMenu === 'signup'} onClick={() => handleMenuClick('signup')}>회원가입</MenuText></Link>
                    </>
                )}
                <Link to="/popular-page"><MenuText isActive={activeMenu === 'popular'} onClick={() => handleMenuClick('popular')}>Popular</MenuText></Link>
                <Link to="/now-playing-page"><MenuText isActive={activeMenu === 'now-playing'} onClick={() => handleMenuClick('now-playing')}>Now Playing</MenuText></Link>
                <Link to="/top-rated-page"><MenuText isActive={activeMenu === 'top-rated'} onClick={() => handleMenuClick('top-rated')}>Top Rated</MenuText></Link>
                <Link to="/up-coming-page"><MenuText isActive={activeMenu === 'up-coming'} onClick={() => handleMenuClick('up-coming')}>Upcoming</MenuText></Link>
                </>
                }
            </MenuBox>
        </Navbar>
    );
}

export default NavbarComponent;
