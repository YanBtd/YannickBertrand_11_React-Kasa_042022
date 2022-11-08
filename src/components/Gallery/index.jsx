import Card from '../../components/Card';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logements from '../../dataKasa/logements.json';

const CardsContainer = styled.section`
    // background-color: #f6f6f6;
    //background-color: blue;
    margin-top: 30px;
    padding-top: 10px;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

function Gallery() {
    // const [logements, setLogement] = useState([]);

    // useEffect(() => {
    //     fetch('../../dataKasa/logements.json')
    //         .then((data) => data.json())
    //         .then((result) => setLogement(result));
    // }, [setLogement]);

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
