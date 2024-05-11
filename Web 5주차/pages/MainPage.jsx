import styled from 'styled-components';
import React from 'react';
import BannerComponent from '../components/MainPage/BannerComponent';

function MainPage() {
    const [searchedMovie, setSearchedMovie] = useState(null);

    return(
        <Wrapper>
            <BannerComponent/>

            <SearchContainer>
                <SearchText>🎬 Find Your Movies!</SearchText>
                <SearchInput/>
                
                <SearchOutputContainer>
                
                </SearchOutputContainer>
            </SearchContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    background-color: black;
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 20px;
    min-height: 80vh;
    background-color: black;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const SearchText = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
    padding-top: 50px;
`;

const SearchInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
    padding-left: 20px;
    font-size: 18px;
`;

const SearchOutputContainer = styled.div`
    width: 60%;
    height: 400px;
    overflow: scroll;
    margin-top: 20px;    
    background-color: green;
`;

export default MainPage;