import React,{useState} from 'react'
import NavigationBar from '../../components/navbar'
import './styles.css'
import Form from 'react-bootstrap/Form'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, Container, Row, Col } from 'react-bootstrap'
import {auth, firestore, firebase} from '../../components/config/fbConfig.js';

const AddCoin = () => {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [marketCap, setMarketCap] = useState('')
    const [isPromoted, setIsPromoted] = useState('')
    const [symbol, setSymbol] = useState('')

    function onChange(date) {
        setDate(date);
    }


    const handlePost = (event) => {
        firestore.collection("Coins").add({ Name: name, Description: description, MarketCap: marketCap, Date: date, Promoted: isPromoted, Votes: 0, Symbol: symbol});
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
    const handlePromoted = event => {
        setIsPromoted(event.target.checked)
    }
    const handleSymbol = event => {
        setSymbol(event.target.value)
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
                                <Form.Control as="textarea" onChange={handleName} rows={1} />
                            </Form.Group>
                            <Form.Group controlId="symbol">
                                <Form.Label>Symbol</Form.Label>
                                <Form.Control as="textarea" rows={1} onChange={handleSymbol} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" onChange={handleDescription} rows={3} />
                            </Form.Group>
                            <Form.Group controlId="logo">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control as="textarea" rows={1} />
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
                                <Form.Label>Binance Smart Chain</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="eth">
                                <Form.Label>Ethereum</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group controlId="solana">
                                <Form.Label>Solana</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
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
                            <Form.Group controlId="promotion">
                                <Form.Check type="checkbox" label="Promoted" onChange={handlePromoted}/>
                            </Form.Group>
                        </Col>    
                    </Row>
                </Form>
                <button onClick={handlePost}>Submit</button>
            </Container>     

            

        </div>
    )
}

export default AddCoin
