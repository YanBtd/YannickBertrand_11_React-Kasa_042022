import styled from 'styled-components';

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 30px;
    //width: 340px;
    height: 340px;
    border-radius: 10px;
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
    margin-left: 10px;
    margin-bottom: 10px;
    width: 280px;

    @media screen and (max-width: 400px) {
        width: 260px;
    }
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

export default Card;