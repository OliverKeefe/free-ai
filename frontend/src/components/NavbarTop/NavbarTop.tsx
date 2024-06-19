import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171A1A;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    min-height: 30px;
    z-index: 1000;
`;

const NavbarLogoContainer = styled.div `
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
`;

const NavbarTop: React.FC = () => {

    return (
        <Nav>
            <NavbarLogoContainer></NavbarLogoContainer>
        </Nav>
    );

}

export default NavbarTop;