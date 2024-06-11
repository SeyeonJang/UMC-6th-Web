import styled from 'styled-components'
import MusicComponent from '../components/MusicComponent'
import cartItems from '../constants/cartItems'
import { CartIcon } from '../constants/icon'

function MainPage() {
    return (
        <PlaylistContainer>
            <Navbar>
                <MainText>Chacco Playlist</MainText>
                <IconWrapper><CartIcon/></IconWrapper>
            </Navbar>

            <MusicContainer>
                {cartItems.map(item => (
                        <MusicComponent
                            key={item.id}
                            title={item.title}
                            singer={item.singer}
                            price={item.price}
                            img={item.img}
                        />
                ))}
            </MusicContainer>

        </PlaylistContainer>
    )
}

const PlaylistContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Navbar = styled.div`
    width: 50%;
    height: 10%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const MainText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #04E532;
    padding-top: 3px;
`;

const IconWrapper = styled.div`
    width: 25px;
    height: 25px;
`;

const MusicContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

export default MainPage