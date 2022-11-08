import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css';

const NavbarContainer = styled.nav`
    width: 309px;
    height: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: black;
    }
`;

function Navbar() {
    return (
        <NavbarContainer role="navigation">
            <NavLink
                to="/"
                className="lien-site"
                style={({ isActive }) =>
                    isActive
                        ? { borderBottom: '1px solid #ff6060' }
                        : { borderBottom: 'unset' }
                }
            >
                Accueil
            </NavLink>
            <NavLink
                to="/a-propos"
                className="lien-site"
                style={({ isActive }) =>
                    isActive
                        ? { borderBottom: '1px solid #ff6060' }
                        : { borderBottom: 'unset' }
                }
            >
                A propos
            </NavLink>
        </NavbarContainer>
    );
}

export default Navbar;
