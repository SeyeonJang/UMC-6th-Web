import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

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
`;

const MenuBox = styled.div`
    width: 500px;
    flex-direction: row;
    display: flex;
    justify-content: end;
    padding-right: 20px;
`;

const MenuText = styled.p`
    margin: 0px;
    padding: 0px 10px;
    color: white;
    font-size: 16px;
    &:hover {
        color: orange;
        font-size: 17px;
        font-weight: 600;
    }
`;

function NavbarComponent() {
    return (
        <Navbar>
            <MainText>UMC Chacco Movie</MainText>
            <MenuBox>
                <MenuText><Link to="/main-page">회원가입</Link></MenuText>
                <MenuText><Link to="/popular-page">Popular</Link></MenuText>
                <MenuText><Link to="/now-playing-page">Now Playing</Link></MenuText>
                <MenuText><Link to="/top-rated-page">Top Rated</Link></MenuText>
                <MenuText><Link to="/up-coming-page">Upcoming</Link></MenuText>
            </MenuBox>
        </Navbar>
    );
}

export default NavbarComponent;
