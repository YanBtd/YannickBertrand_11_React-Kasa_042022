// import PropTypes from 'prop-types';
// import DefaultPicture from '../../assets/imgTest.png';
import styled from 'styled-components';

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 30px;
    //width: 340px;
    height: 340px;
    border-radius: 10px;

    // @media screen and (max-width: 1068px) {
    //     width: 100%;
    // }
`;
const CardImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
        transform: scale(1.01);
    }
`;
const CardTitle = styled.span`
    // background-color: red;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    position: absolute;
    // bottom: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    width: 280px;
`;

function Card({ logement }) {
    return (
        <CardWrapper>
            <CardImage
                src={logement.cover}
                alt={logement.title}
                title={logement.title}
            />
            <CardTitle>{logement.title}</CardTitle>
        </CardWrapper>
    );
}

// function Card({ logement }) {
//     return (
//         <article
//             style={{ display: 'flex', flexDirection: 'column', padding: 15 }}
//         >
//             <span>{logement.title}</span>
//             <img src={logement.cover} alt="logement" height={340} width={340} />
//         </article>
//     );
// }

// Card.propTypes = {
//     label: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
// };

// Card.defaultProps = {
//     label: '',
//     title: '',
//     // picture: DefaultPicture,
// };
export default Card;
