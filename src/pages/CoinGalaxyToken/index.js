import React from 'react'
import NavigationBar from '../../components/navbar'
import { InputGroup, Container, Row, Col, Card, Button } from 'react-bootstrap'
import Footer from '../../components/footer'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiFillWallet} from 'react-icons/ai'
import {FaMoneyBill, FaFire} from 'react-icons/fa'
import TwitterLogo from '../../images/twitterLogo.png'
import TelegramLogo from '../../images/telegramLogo.png'
import './styles.css'
import { Link } from 'react-router-dom'

const CoinGalaxyToken = () => {
    return (
        <div>
            <NavigationBar/>

            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "120vh"}}>
                <Card className='galaxyInfo'>
                    <Card.Body>
                        <div>
                        <center>
                            <h1>CoinGalaxy Token Information</h1> 
                            <Link className='navlink' to={{ pathname:"https://twitter.com/_CoinGalaxy"}} target="_blank">
                                <Button className="mr-4 navbutton tokenInfoLink">
                                Bogged.Finance
                                </Button>
                            </Link>

                            <Link className='navlink' to={{ pathname:"https://t.me/coingalaxyofficial"}} target="_blank">
                                <Button className="mr-4 navbutton tokenInfoLink">
                                PooCoin
                                </Button>
                            </Link>
                        </center>

            

                        <p>The GalaxyCoin token is directly linked to the coingalaxy.cc website. Please use the charts and 
                        contract address above to view and buy the token, all others are most likely scam tokens and/or
                        impersonations. </p>
                        
                        <p>
                        By investing in the GalaxyCoin token holders will be rewarded with passive income as well as 
                        weekly giveaways of Binance Coin (BNB). We plan on expanding to give holders more benefits 
                        in the short and long term, but things aren't going to happen over night. We will provide
                        updates in the <a className='infoLink' target='_blank' href='https://t.me/coingalaxyofficial'>Telegram</a> and on <a className='infoLink' target='_blank' href='https://twitter.com/_CoinGalaxy'>Twitter</a>. Lastly, during the
                        first two weeks of the launch, we will be doing daily Buyback Burns of the token and after 
                        those first two weeks, we will be doing larger Buyback Burns twice a week.
                        </p>
                        

                        <h2>Tokenomics:</h2>
                        <p>
                        The Transaction fee is 10%, meaning you will need to use 10-12% slippage and is as followed.
                        </p>
                        <Row>
                            <Col>
                                <Card className="tokenomics">
                                    <BsFillShieldLockFill className='tokenomicsicons' size={70}/>                                    <Card.Body>
                                    <Card.Title>
                                        <h3>  4% to Liquidity Burned</h3>
                                    </Card.Title>
                                    <Card.Text>
                                    <p>
                                        4% of all transactions will be sent to the Liquidity Pool and burned. Over time as there is 
                                        more volume of purchases and sales of the token, the Liquidity Pool will increase.
                                    </p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="tokenomics">
                                <AiFillWallet className='tokenomicsicons' size={70} />                                     <Card.Body>
                                    <Card.Title>
                                    <h3> 4% to Marketing Wallet</h3>
                                    </Card.Title>
                                    <Card.Text>
                                    <p>
                                        4% of all transactions will be sent to a "Marketing Wallet", although this wallet won't just
                                        be used for marketing. This fund will also be used for hiring team members, and expanding upon
                                        the project and team. 
                                    </p>  
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="tokenomics">
                                <FaMoneyBill className='tokenomicsicons' size={70}/>                                     <Card.Body>
                                    <Card.Title>
                                    <h3>  2% to Redistribution</h3>
                                    </Card.Title>
                                    <Card.Text>
                                    <p>
                                    2% of all transactions will be rewarded to holders of the token. This will generate passive 
                                    income for the holders without any extra steps other than just HOLDing.
                                    </p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                       
                        <p>
                        Secondly, a portion of these funds will be used to buyback tokens and sent
                        to a burn wallet, meaning the value of the tokens that you as holders buy, will increase in 
                        value over time. 
                        </p>

                        <p>
                        Finally, a portion of these funds will be used to manually provide liquidity for 
                        the token, meaning bigger sells won't have as big of an effect on the token in the long term
                        and will hopefully speed up the process of being listed on bigger exchanges.
                        </p>

                        <h2> <FaFire className='icons' size={35}/> Buyback And Burns </h2>

                        <p>
                        There are going to be two main functions of buying back tokens, firstly, as mentioned in the 
                        Marketing Wallet Description, a portion of the marketing wallet funds will be used to buyback 
                        and burn the tokens on a daily basis for the first 2 weeks after the launch of the token, and
                        will continue to be done 2-3 times per week after the first 2 weeks. Secondly a portion of 
                        profits from the site from people promoting their token through advertisement banners and 
                        promoted section placements. 
                        </p>
                        
            
                        </div>

                    </Card.Body>
                </ Card>
            </Container>
            <Footer/>
        </div>
       
    )
}

export default CoinGalaxyToken
