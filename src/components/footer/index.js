import {React, useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { firebase, firestore } from '../config/fbConfig'
import Button from 'react-bootstrap/Button'
import { FaPlus, FaBullhorn, FaSignInAlt } from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../logo-dark.png'
import TwitterLogo from '../../images/twitterLogo.png'
import TelegramLogo from '../../images/telegramLogo.png'
import './styles.css'
import { useAuth} from '../../contexts/AuthContext'
import Select from 'react-dropdown-select'

const Footer = () => {

    return (
            <div className='footer' variant="dark">
                <Link to="/"> 
                        <img
                            alt=""
                            src={logo}
                            width="192"
                            height="44"
                            className="d-inline-block align-bottom"
                        />{' '}
                    </Link>
              
                        <Link className='navlink' to={{ pathname:"https://twitter.com/_CoinGalaxy"}} target="_blank">
                            <Button className="mr-4 navbutton">
                            <img
                            alt="twitter"
                            src={TwitterLogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-bottom"
                            />
                            </Button>
                        </Link>

                        <Link className='navlink' to={{ pathname:"https://t.me/coingalaxyofficial"}} target="_blank">
                            <Button className="mr-4 navbutton">
                            <img
                            alt="Telegram"
                            src={TelegramLogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-bottom"
                            />
                            </Button>
                        </Link>

                 
                        <Link className='navlink' to="/termsofservice">
                            <Button className="mr-4 navbutton">
                                Terms of Service
                            </Button>
                        </Link>

                        <Link className='navlink' to="/promote">
                            <Button className="mr-4 navbutton">
                                Contact Us
                            </Button>
                        </Link>
            </div>
    )
}

export default Footer
