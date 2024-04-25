import styled from 'styled-components';
import React from 'react';

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
`;

function NavbarComponent() {
    return (
        <Navbar>
            <MainText>UMC Chacco Movie</MainText>
            <MenuBox>
                <MenuText>회원가입</MenuText>
                <MenuText>Popular</MenuText>
                <MenuText>Now Playing</MenuText>
                <MenuText>Top Rated</MenuText>
                <MenuText>Upcoming</MenuText>
            </MenuBox>
        </Navbar>
    );
}

export default NavbarComponent;
