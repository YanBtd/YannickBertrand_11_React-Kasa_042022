import Banniere from '../../components/Banniere';
import Gallery from '../../components/Gallery';
import styled from 'styled-components';

const HomeContainer = styled.main`
    // background-color: yellowgreen;
    padding-left: 5%;
    padding-right: 5%;
`;

function Home() {
    return (
        <HomeContainer>
            <Banniere />
            <Gallery />
        </HomeContainer>
    );
}

export default Home;