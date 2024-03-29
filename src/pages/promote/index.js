import React from 'react'
import NavigationBar from '../../components/navbar'
import { InputGroup, Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../../components/footer';
import {FaRegQuestionCircle} from 'react-icons/fa'
import adv from '../../Vectoradv.png';
import './styles.css';
const Promote = () => {
    return (
        <div  >
            <NavigationBar/>
            <div style={{minHeight: "100vh"}}>
                <Container className="align-items-center justify-content-center mt-5" style={{minHeight: "20vh"}}>
                    <Card className="promoCard">
                                <Card.Body>
                                    <div>
                                        <span>
                                        <img
                                            src={adv}
                                            alt="token"
                                            width="100"
                                            className='cardPhoto'
                                        />
                                            <h2>Advertising and promotions</h2>

                                            <p1>
                                            Would you like your project to be promoted on coingalaxy.cc to be seen by thousands of
                                            potential investors? Please contact us through the email provided below to find out prices 
                                            and information, you should receive a response within 24 hours.
                                            </p1>
                                        </span>
                                    </div>
                                    

                                </Card.Body>
                            </ Card>

                            <Card className="promoCard mt-5">
                                <Card.Body>
                                    <div>
                                    <FaRegQuestionCircle className='inqicon' size={100}/>
                                    <h2>General Inquiries </h2>

                                    <p1>
                                    If you have any general inquiries about the site, please contact us through the email provided below.
                                    If you have a question about the coingalaxy.cc token, please read the token summary 
                                    page here (embeded link), or join the Telegram (embeded link) and a mod or admin should get 
                                    back to you shortly.
                                    </p1>
                                    </div>
                                </Card.Body>
                            </ Card>
                </Container>
            </div>
            

            <Footer />
        </div>
       
    )
}

export default Promote
