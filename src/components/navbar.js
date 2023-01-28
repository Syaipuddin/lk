import React, { Component } from 'react';
import styled from 'styled-components';
import kmLogo from '../assets/kmLogo.svg';
import logoUSU from '../assets/logousu.svg';
import {Link} from 'react-router-dom'

const NavbarContainer = styled.div`
display: flex;
justify-content: center;    `


const SButton = styled(Link)`
cursor: pointer;
border: none;
margin: 12px;
padding: 8px;
font-family: "Raleway";
font-size:32px;
color:black;
background: white;
text-decoration: none;
@media only screen and (max-width: 480px){
    font-size: 24px;
}
`
const Container = styled.div`
display: flex;
`




class Navbar extends Component {
    render() {
        return(
            <NavbarContainer>
                <Container className="Navbar">
                    <SButton to="/">Home</SButton>
                    <SButton to="/program">Program</SButton>
                    <SButton to="/berita">Berita</SButton>
                </Container>
            </NavbarContainer>
        )
        }
}

export default Navbar;

