import React, { useState } from 'react';
import fleche from '../../assets/FlecheDropdown.svg';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
    // background-color: aquamarine;
    border-radius: 5px;
    margin-bottom: 35px;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 1200px) {
        width: 48%;

        &.full {
            width: 100%;
        }
    }
`;
const DropdownHeader = styled.div`
    background-color: #ff6060;
    border-radius: 5px;
    display: flex;
    align-items: center;
    display: inline-flex;
    width: 100%;
    height: 50px;
`;
const DropdownTitle = styled.div`
    // background-color: black;
    color: #ffffff;
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 1.5rem;
    width: 100px;
    margin-left: 10px;
`;
const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    margin-right: 20px;
    width: 100%;
    &.${true} {
        justify-content: flex-start;
        transform: rotate(180deg);
    }
`;
const DropdownImage = styled.img`
    width: 25px;
    height: 15px;
`;

const DropdownContent = styled.div`
    background-color: #f6f6f6;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #ff6060;
    margin-top: -10px;
    min-height: 100px;
    padding: 25px 10px 10px 10px;
    display: none;

    &.show {
        display: block;
    }
`;

function Dropdown({ fullWidth, titre, description }) {
    /* Création d'un hook d'état pour gérer le Dropdown */
    const [dropdown, setDropdown] = useState(false);

    return (
        <DropdownWrapper className={`${fullWidth}`} id={`dropdown-${titre}`}>
            <DropdownHeader>
                <DropdownTitle>{titre}</DropdownTitle>
                <DropdownLink
                    className={`${dropdown}`}
                    onClick={() => setDropdown(!dropdown)}
                >
                    <DropdownImage src={fleche} alt="Ouvrir cette liste" />
                </DropdownLink>
            </DropdownHeader>
            {
                /* Quand le state est à TRUE alors on affiche la description */
                <DropdownContent className={dropdown ? 'show' : ''}>
                    {description}
                </DropdownContent>
            }
        </DropdownWrapper>
    );
}

export default Dropdown;