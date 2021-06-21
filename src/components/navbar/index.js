import {React, useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { firebase, firestore } from '../config/fbConfig'
import Button from 'react-bootstrap/Button'
import { FaPlus, FaBullhorn, FaSignInAlt } from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../logo-dark.png'
import './styles.css'
import { useAuth} from '../../contexts/AuthContext'
import Select from 'react-dropdown-select'

const NavigationBar = () => {
    const { currentUser, logout } = useAuth()
    const [ coins, setCoins ] = useState([])
    const [ selectedCoinUrl, setSelectedCoinUrl ] = useState()

    useEffect(() => {
        fetchData();
    }, []);

     async function fetchData() {
         let temp = []
        
         await firestore.collection("Coins").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
                    var coinName = doc.data().Name;
                    var id = doc.id;
                    temp = [...temp, {"Name" : coinName, "ID" : id}]
             });
             setCoins(temp)
         })
     }
    
     function searchSelect(value){
         if (value[0]){
            setSelectedCoinUrl(`/${value[0].ID}`)
            
            if (selectedCoinUrl == undefined){
                return;
            }
         }

        // Put code here to redirect to coin page
     }

    const logInButton = () => {
        if (currentUser){
            return (<Link  className='navlink' to="/">
            <Button onClick={logout} className="mr-4 navbutton">
                Log Out
            </Button>
        </Link>)
        }   
        else{
            return (<Link  className='navlink' to="/login">
            <Button className="mr-4 navbutton">
                Log In
            </Button>
        </Link>)
        }
    }

    return (
        <>
            <Navbar className='navbarBg' variant="dark">
                <Link to="/"> 
                        <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="192"
                            height="44"
                            className="d-inline-block align-top"
                        />{' '}
                        </Navbar.Brand>
                    </Link>
                    <Link className='tokenLink' to ="/coingalaxytoken">
                        CoinGalaxy Price: $3.92
                    </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Select
                            className='searchbar'
                            options={coins}
                            labelField = "Name"
                            searchBy = "Name"
                            onChange={(values) => searchSelect(values)}
                        />
                        <Link className='navlink' to="/addcoin">
                            <Button className="mr-4 navbutton">
                                Add Coin
                            </Button>
                        </Link>
                        <Link  className='navlink' to="/promote">
                            <Button  className="mr-4 navbutton">
                                Promote
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
