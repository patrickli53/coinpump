
import React, { useState } from 'react'
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import './styles.css'

const CoinInfo = (props) => {
   const {Name, Logo, Description, Price, MarketCap, Date, Website, Twitter, Telegram, Symbol, BSC, Ethereum, Solana, ContractAddress} = props.data;
   const launch = Date && Date.toDate().toDateString();
   function returnChain(){
    if (BSC){
        return "BSC";
    }

    if (Ethereum){
        return "ETH";
    }
    if (Solana){
        return "SOL";
    }
}
    return (
        <>
            <Container>
                <Row>
                    <Col lg='8'>
                        <Card className='mainCard'>
                            <Card.Header>
                            <span> 

                                <Card.Title className="header">                                
                                <img
                                    src={Logo}
                                    alt="token"
                                    width="100"
                                    className='coinLogo'
                                />{Name} 	• <span className='symbol'>${Symbol}</span></Card.Title>
                                <Card.Subtitle className='subTitle'>{returnChain()} {ContractAddress}</Card.Subtitle>
                               
                            </span>
        
                            </Card.Header>
                            <Card.Body className='desc'>
                                {Description}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Card className='sidebox w-100'>
                                <Card.Body>
                                    <h2 className="">Price (USD)</h2>
                                    <h3> {Price}</h3>
                                    <h2 className="">Marketcap</h2>
                                    <h3> {MarketCap}</h3>
                                    <h2 className="">Launch Date</h2>
                                    <h3> {launch}</h3>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className='mt-4'>
                            <Card className='sidebox w-100'>
                                <Card.Body>
                                    <ButtonGroup vertical className='w-100'>
                                        <Button className=' socialButton mb-3'><a target="_blank" href={`${Telegram}`}>Telegram</a></Button>
                                        <Button className=' socialButton mb-3'><a target="_blank" href={`${Twitter}`}>Twitter</a></Button>
                                        <Button className='socialButton' ><a target="_blank" href={`${Website}`}>Website</a></Button>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
           
        </>
    )
}

export default CoinInfo;
