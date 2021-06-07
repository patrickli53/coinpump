import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { FaPlus, FaBullhorn, FaSignInAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import logo from '../../Logo_CoinPump.png'
import './styles.css'

const NavigationBar = () => {
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
                        <Button className="mr-4 navbutton">
                            <Link  className='navlink' to="/promote">
                                <FaBullhorn/> promote
                            </Link>
                        </Button>
                        <Button className="mr-4 navbutton">
                            <Link  className='navlink' to="/login">
                                <FaSignInAlt/> log In
                            </Link>
                        </Button>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavigationBar
