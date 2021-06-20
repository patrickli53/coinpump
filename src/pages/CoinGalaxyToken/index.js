import React from 'react'
import NavigationBar from '../../components/navbar'
import { InputGroup, Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../../components/footer'

const CoinGalaxyToken = () => {
    return (
        <div>
            <NavigationBar/>

            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "120vh"}}>
                <Card>
                    <Card.Body>
                        <div>
                        <center><h2>CoinGalaxy Token Information</h2></center>

                        <h3>(Top Page has buttons linked to Bogged.Finance and Poocoin)</h3>

                        <p>The CoinPump token is directly linked to the coinpump.cc website, Please use the charts and 
                        contract address above to view and buy the token, all others are most likely scam tokens and/or
                        impersonations. </p>
                        
                        <p>
                        By investing in the CoinPump token holders will be rewarded with passive income as well as 
                        weekly giveaways of Binance Coin (BNB). We plan on expanding to give holders more benefits 
                        in the short and long term, but things aren't going to happen over night. We will provide
                        updates in the Telegram (TG link here) and on Twitter (Twitter Link here). Lastly, during the
                        first two weeks of the launch, we will be doing daily Buyback Burns of the token and after 
                        those first two weeks, we will be doing larger Buyback Burns twice a week.
                        </p>
                        

                        <h3>Tokenomics: (icons/pictures for the tokenomics at top of this section)</h3>

                        <p>
                        The Transaction fee is 10%, meaning you will need to use 10-12% slippage and is as followed.
                        </p>

                        <p>
                        4% to Liquidity burned, 2% rewarded to holders, 4% to Marketing wallet
                        </p>

                        <p>
                        4% of all transactions will be sent to the Liquidity Pool and burned. Over time as there is 
                        more volume of purchases and sales of the token, the Liquidity Pool will increase.
                        </p>

                        <p>
                        2% of all transactions will be rewarded to holders of the token. This will generate passive 
                        income for the holders without any extra steps other than just HODLing.
                        </p>

                        <p>
                        4% of all transactions will be sent to a "Marketing Wallet", although this wallet won't just
                        be used for marketing. This fund will also be used for hiring team members, and expanding upon
                        the project and team. 
                        </p>

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

                        <h3>BUYBACK AND BURNS</h3>

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
