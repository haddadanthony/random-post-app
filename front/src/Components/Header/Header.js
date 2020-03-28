import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
    max-width: 1140px;
    transform: skew(-2deg);
    background: #9f00ff;
    height: fit-content;
    margin: 0 auto;
    display: grid;
    align-items: center;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @media (max-width: 1140px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    padding: 0;
    margin-left: 20px;
    color: #fff;
    font-size: 3rem;
`;

const Header = () => {
    return (
        <Nav>
            <Title>ANYTHING</Title>
        </Nav>
    )
}

export default Header;
