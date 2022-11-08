import { useParams, Navigate } from 'react-router-dom';
import logements from '../../dataKasa/logements.json';
import Carrousel from '../../components/Carrousel';
import Tag from '../../components/Tag';
import EtoilePleine from '../../assets/Etoile.png';
import EtoileVide from '../../assets/EtoileVide.png';
import Dropdown from '../../components/Dropdown';
import styled from 'styled-components';

const LogementContainer = styled.div`
    // background-color: aquamarine;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 40px;
    min-height: 100vh;
`;
const LogementWrapper = styled.section`
    // background-color: black;
    display: flex;
    flex-direction: column;
    // width: 100%;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
const LogementInfos = styled.div`
    // background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    @media screen and (min-width: 1200px) {
        margin-bottom: 0;
    }
`;
const LogementTitre = styled.span`
    // background-color: pink;
    color: #ff6060;
    font-size: 1.5rem;
`;
const LogementLocation = styled.span`
    // background-color: yellowgreen;
    color: #ff6060;
    font-size: 1rem;
    margin-bottom: 2%;
`;
const LogementTags = styled.div`
    // background-color: yellow;
`;
const HostWrapper = styled.div`
    // background-color: blue;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 360px) {
        flex-direction: column;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: column;
        align-items: flex-end;
    }
`;
const HostInfos = styled.div`
    // background-color: purple;
    display: flex;

    @media screen and (min-width: 1200px) {
        margin-bottom: 25px;
    }
`;
const HostName = styled.span`
    // background-color: red;
    font-size: 1.5rem;
    margin-right: 10px;
    text-align: right;
    width: 100px;
    color: #ff6060;
`;
const HostPhoto = styled.img`
    border-radius: 50%;
    height: 64px;
    object-fit: cover;
    width: 64px;
`;
const HostNote = styled.div`
    // background-color: pink;
    display: flex;
`;
const Etoile = styled.img`
    height: 30px;
    width: 30px;
`;
const DescAndEquipts = styled.div`
    // background-color: orange;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
const Equipement = styled.li`
    // background-color: black;
    list-style: none;
`;

function Logement() {
    /* Récupère l'objet Logement en fonction de son id' */
    const getId = useParams();
    const logement = logements.find((logement) => logement.id === getId.id);

    /* Tags */
    const tagsLogement = logement?.tags.map((tag, index) => {
        return <Tag key={index} nom={tag} />;
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(logement?.rating)) {
            etoileComplete = false;
        }
        if (etoileComplete === true) {
            noteLogement.push(
                <Etoile
                    key={index}
                    src={EtoilePleine}
                    alt={`${logement?.rating}/5`}
                />
            );
        } else {
            noteLogement.push(
                <Etoile
                    key={index}
                    src={EtoileVide}
                    alt={`${logement?.rating}/5`}
                />
            );
        }
    }

    /* Équipements */
    const equipementsLogement = logement?.equipments.map((equipment, index) => {
        return <Equipement key={index}>{equipment}</Equipement>;
    });

    return (
        <>
            {logement ? (
                <LogementContainer>
                    <Carrousel images={logement?.pictures} />
                    <LogementWrapper>
                        <LogementInfos>
                            <LogementTitre>{logement?.title}</LogementTitre>
                            <LogementLocation>
                                {logement?.location}
                            </LogementLocation>
                            <LogementTags>{tagsLogement}</LogementTags>
                        </LogementInfos>
                        <HostWrapper>
                            <HostInfos>
                                <HostName>{logement?.host.name}</HostName>
                                <HostPhoto
                                    src={logement?.host.picture}
                                    alt="Propriétaire"
                                />
                            </HostInfos>
                            <HostNote>{noteLogement}</HostNote>
                        </HostWrapper>
                    </LogementWrapper>
                    <DescAndEquipts>
                        <Dropdown
                            titre="Description"
                            description={logement?.description}
                        />
                        <Dropdown
                            titre="Équipements"
                            description={equipementsLogement}
                        />
                    </DescAndEquipts>
                </LogementContainer>
            ) : (
                <Navigate replace to="*" />
            )}
        </>
    );
}

export default Logement;