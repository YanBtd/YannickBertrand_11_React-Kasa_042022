import logo from '../../assets/logoB&W.png';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background: #000000;
    width: 100%;
    height: 209px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
const FooterImage = styled.img`
    width: 122px;
    height: 40px;
`;
const FooterParag = styled.p`
    color: #ffffff;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterImage src={logo} alt="log kasa" />
            <FooterParag>&copy; 2022 Kasa. Tous droits réservés</FooterParag>
        </FooterContainer>
    );
}

export default Footer;