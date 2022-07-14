import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import {ReactComponent as Logo} from '../images/logo.svg'

const navbarStyle={
    backgroundColor: 'lightblue'
}

const Header=(props) =>{
    return(
        <Navbar style ={navbarStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">Images {props.title}</Navbar.Brand>
                <Logo />
            </Container>
            
        </Navbar>
    )
}

export default Header;