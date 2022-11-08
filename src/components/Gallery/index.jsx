import Card from '../../components/Card';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logements from '../../dataKasa/logements.json';

const CardsContainer = styled.section`
    background-color: #f6f6f6;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 25px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 20px;
    }
`;

function Gallery() {

    return (
        <CardsContainer>
            {Logements.map((logement) => (
                <NavLink
                    key={logement.id}
                    to={'/logement/' + logement.id + '/#'}
                >
                    <Card key={logement.id} logement={logement} />
                </NavLink>
            ))}
        </CardsContainer>
    );
}

export default Gallery;