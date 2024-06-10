import styled from 'styled-components'
import MusicComponent from '../components/MusicComponent'
import cartItems from '../constants/cartItems'

function MainPage() {
    return (
        <PlaylistContainer>
            <Navbar>
                <MainText>Chacco Playlist</MainText>
                <Icon></Icon>
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
    height: 100%;
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

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
`;

const MusicContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export default MainPage