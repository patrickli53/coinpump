import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FaPlus, FaBullhorn, FaSignInAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import logo from '../../Logo_CoinPump.png'
import './styles.css'
import { useAuth} from '../../contexts/AuthContext'

const NavigationBar = () => {
    const { currentUser, logout } = useAuth() 
    const logInButton = () => {
        console.log(currentUser)
        if (currentUser){
            return (<Link  className='navlink' to="/">
            <Button onClick={logout} className="mr-4 navbutton">
                <FaSignInAlt/> log out
            </Button>
        </Link>)
        }   
        else{
            return (<Link  className='navlink' to="/login">
            <Button className="mr-4 navbutton">
                <FaSignInAlt/> log in
            </Button>
        </Link>)
        }
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Link to="/"> 
                        <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        coinpump
                        </Navbar.Brand>
                    </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='navlink' to="/addcoin">
                            <Button className="mr-4 navbutton">
                                <FaPlus/> add coin
                            </Button>
                        </Link>
                        <Link  className='navlink' to="/promote">
                            <Button className="mr-4 navbutton">
                                <FaBullhorn/> promote
                            </Button>
                        </Link>
                        {logInButton()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavigationBar
