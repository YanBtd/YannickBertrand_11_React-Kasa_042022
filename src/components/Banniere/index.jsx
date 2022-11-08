import banniere from '../../assets/banniere.png';
import styled from 'styled-components';

const BanniereWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 25px;
    background-color: #000000;
    width: 100%;
    height: 223px;
    position: relative;
`;
const BanniereImage = styled.img`
    opacity: 0.8;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const BanniereTitle = styled.h1`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 2.5rem;
`;

function Banniere() {
    return (
        <BanniereWrapper>
            <BanniereImage src={banniere} alt="banniere kasa" />
            <BanniereTitle>Chez vous, partout et ailleurs</BanniereTitle>
        </BanniereWrapper>
    );
}

export default Banniere;