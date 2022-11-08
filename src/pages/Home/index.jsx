import Banniere from '../../components/Banniere';
import Gallery from '../../components/Gallery';
import styled from 'styled-components';

const HomeContainer = styled.main`
    //background-color: yellowgreen;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
    //display: grid;
    //grid-gap: 10px;
    //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
