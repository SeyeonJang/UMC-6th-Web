import styled from 'styled-components'
import MusicComponent from '../components/MusicComponent'
import { CartIcon } from '../constants/icon'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../src/module/cartSlice';

function MainPage() {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts.carts);
    const handleCleanCart = () => {
        dispatch(clearCart());
    };

    return (
        <PlaylistContainer>
            <Navbar>
                <MainText>Chacco Playlist</MainText>
                <IconWrapper><CartIcon/></IconWrapper>
            </Navbar>

            <MusicContainer>
                {carts.map(item => (
                    <MusicComponent
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        singer={item.singer}
                        price={item.price}
                        img={item.img}
                        amount={item.amount}
                    />
                ))}
            </MusicContainer>

            <Line/>
            <TextWrapper>
                <SubText>총 금액</SubText>
                <SubText>₩ 110000</SubText>
            </TextWrapper>
            <button onClick={handleCleanCart}>전체 초기화</button>
            <TextWrapper/>

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

const Line = styled.div`
    width: 50%;
    height: 2px;
    background-color: lightgrey;
    margin-bottom: 30px;
`;

const TextWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
`;

const SubText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    overflow: ellipsis;
`;

export default MainPage