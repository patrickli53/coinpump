import React,{useState} from 'react'
import NavigationBar from '../../components/navbar'
import AddCoinComponent from '../../components/AddCoinComponent'
import './styles.css'
import Form from 'react-bootstrap/Form'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, Container, Row, Col, Card } from 'react-bootstrap'
import {auth, firestore, firebase} from '../../components/config/fbConfig.js';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer'

const AddCoin = () => {
    const [validated, setValidated] = useState(false);
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [marketCap, setMarketCap] = useState('')
    const [isPromoted, setIsPromoted] = useState('')
    const [symbol, setSymbol] = useState('')
    const [price, setPrice] = useState('')
    const [solana, setSolana] = useState(false)
    const [BSC, setBSC] = useState(false)
    const [website, setWebsite] = useState('')
    const [twitter, setTwitter] = useState('')
    const [telegram, setTelegram] = useState('')
    const [logo, setLogo] = useState('')
    const [contractAddress, setContractAddress] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [ethereum, setEthereum] = useState(false)
    

    function onChange(date) {
        setDate(date);
    }
    
    return (
        <div>
            <div>
                <NavigationBar />
            </div>

                <AddCoinComponent />
                <Footer/>
        </div>
    )
}

export default AddCoin

