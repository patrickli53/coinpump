import React,{useState} from 'react'
import NavigationBar from '../../components/navbar'
import './styles.css'
import Form from 'react-bootstrap/Form'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, Container, Row, Col } from 'react-bootstrap'
import {auth, firestore, firebase} from '../../components/config/fbConfig.js';

const AddCoin = () => {
    const [validated, setValidated] = useState(false);
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [marketCap, setMarketCap] = useState('')
    const [symbol, setSymbol] = useState('')
    const [logo, setLogo] = useState('')
    const [price, setPrice] = useState('')

    function onChange(date) {
        setDate(date);
    }
    


    const handlePost = (event) => {
        
        firestore.collection("Coins").add({ 
            Name: name, 
            Description: description, 
            MarketCap: marketCap, 
            Date: date, 
            Promoted: false, 
            Votes: 0, 
            Symbol: symbol, 
            Logo: logo, 
            Price: price,
        });
    }
    const handleName = event => {
        setName(event.target.value)
    }
    const handleDescription = event => {
        setDescription(event.target.value)
    }
    const handleMarketCap= event => {
        setMarketCap(event.target.value)
    }
    const handleSymbol = event => {
        setSymbol(event.target.value)
    }
    const handleLogo = event => {
        setLogo(event.target.value)
    }
    const handlePrice = event => {
        setPrice(event.target.value)
    }
   


    return (
        <div className="mainDiv">
            <NavigationBar />
            
            <Container className="mt-5" style={{minHeight: "100vh"}}>  
            <h2 className="mb-3"> Add Coin </h2>
                <Form> 
                    <Row>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required as="textarea" onChange={handleName} rows={1} />
                            </Form.Group>
                            <Form.Group controlId="symbol">
                                <Form.Label>Symbol</Form.Label>
                                <Form.Control required as="textarea" rows={1} onChange={handleSymbol} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control required as="textarea" onChange={handleDescription} rows={3} />
                            </Form.Group>
                            <Form.Group controlId="logo">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control required as="textarea" onChange={handleLogo} rows={1} />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control onChange={handlePrice} required as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="marketcap">
                                <Form.Label>Market Cap</Form.Label>
                                <Form.Control as="textarea" onChange={handleMarketCap} rows={1} />
                            </Form.Group>
                            <Form.Group controlId="launchdate">
                                <Form.Label>Launch Date</Form.Label>
                                <InputGroup>
                                    <ReactDatePicker selected={date}/>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            
                            <Form.Group controlId="bsc">
                                <Form.Label>Network/Chain</Form.Label>
                                <div>
                                    <Form.Check inline name='chain' label="Binance Smart Chain" type='radio' id='bsc'/>
                                    <Form.Check inline name='chain' label="Ethereum" type='radio' id='eth'/>
                                    <Form.Check inline name='chain' label="Solana" type='radio' id='sol'/>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="contractAddress">
                                <Form.Label>Contract Address</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            {/* <Form.Group controlId="eth">
                                <Form.Label>Ethereum</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="solana">
                                <Form.Label>Solana</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group> */}
                            <Form.Group controlId="website">
                                <Form.Label>Website</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="telegram">
                                <Form.Label>Telegram</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="twitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="website">
                                <Form.Label>Contact Email</Form.Label>
                                <Form.Control as="email" rows={1} />
                            </Form.Group>
                            <div>
                                If you would like to make any changes to your coin information, or would like to contact us about promotion, send us an email from your specified contact email.
                            </div>
                        </Col>    
                    </Row>
                </Form>
                <button onClick={handlePost}>Submit</button>
            </Container>     

            

        </div>
    )
}

export default AddCoin
