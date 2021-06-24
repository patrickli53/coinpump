import React from 'react'
import NavigationBar from '../../components/navbar'
import { InputGroup, Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../../components/footer';
import './styles.css'

const Terms = () => {
    return (
        <div>
            <NavigationBar/>

            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "120vh"}}>
                <Card className='galaxyTerms'>
                    <Card.Body>
                        <div>
                        <center><h1>TERMS OF SERVICE</h1></center>

                        
                        <h3>Last updated: (release date)</h3>
                        
                        <p>
                        By using coinpump.cc you agree to following all of the terms of service, if you are found 
                        to not be following all of these terms, your account will be restricted with no warning. 
                        While reading the Terms of Service as well as the rest of the content on coinpump.cc, the
                        use of the word "we", "us", or "our" refers to coinpump.cc, and the use of "you", refers to
                        any visitors and/or users of coinpump.cc
                        </p>

                        <h3>VOTING ON COINPUMP</h3>

                        <p>
                        You're only allowed to make one vote per token once per 24 hour period, but with that being 
                        said, you are allowed to cast a vote on multiple tokens per 24 hour period. For example, you'd
                        be able to vote for Bitcoin and Ethereum both once, but voting for Bitcoin twice would be 
                        against these terms. (This includes the use of proxies and VPNs to cast multiple votes on a 
                        single token)
                        Scripts, bots or other automated prgrams are not allowed on coinpump.cc, votes must be casted
                        by an individual physically using this site.
                        Selling voting services and the advertising of voting services will not be tolerated and will
                        also result in the restriction of your account.
                        </p>

                        <h3>SUBMITTING A TOKEN</h3>

                        <p>
                        The owner is not the only individual allowed to submit or promote a token, if you are a 
                        fan of a token and would like to promote it, you are allowed to do so even if
                        you have no involvment with the creation of the token. With that being said,
                        if the owner of a token makes a complaint of them not wanting a token listed on
                        coinpump.cc, it will be removed upon their request. 
                        If there are any problems with the token you have submitted, you will not be 
                        notified of the problems, and will have to make another submission of the token. 
                        If you were to submit any information on a token that may come off as racist, 
                        sexist, pornographic, or hateful content, you may be restricted from using coinpump.cc
                        without warning. 
                        </p>


                        <h3>TOKENS BEING REMOVED</h3>

                        <p>
                        coinpump.cc has the right to remove a token at any time. 
                        We will be lenient with minor problems with a token, but if we were to find out that there
                        is a "rug pull" still listed on the site or a token where sells cannot be initiated, there 
                        will be a lack of leniency whether your token was submitted by the owner, or a person of the 
                        community. To prevent community members submitting a token with false information of your 
                        token including false links, contract addresses etc. We will personally check in with the 
                        owners of the token on Telegram to confirm the information that was provided by the community
                        member.
                        </p>

                        <h3>PROMOTED TOKENS</h3>
                        
                        <p>
                        Payments to promote your token can be made using BNB, BUSD, USDT, ETH, or BTC.
                        If you would like to request a different crypto payment method, feel free to ask 
                        when emailing us to promote your token and we will try to come to a mutual agreement. 
                        If demand of promoting tokens on coinpump.cc were to rise, We at coinpump.cc reserve the right
                        to change the payment amounts for our services as demand rises. If there were to be a pricing
                        change as a token is currently being promoted, you will not be contacted to pay more than what
                        you paid upon the originial agreement.
                        </p>

                        <h3>COINPUMP PROMOTION</h3>

                        <p>   
                        Coinpump.cc reserves the right to promote our own token in the promoted section whenever we 
                        please. 
                        We will only be doing so during our launch or big events, this will be announced on our 
                        Twitter and will only be in the promoted section for 2-3 days at a time.
                        </p>  

                        <h3>TERMS OF SERVICE UPDATES</h3>
                        
                        <p> 
                        Coinpump.cc has the rights to update the terms of service at anytime. 
                        These changes will be announced on the Twitter and Telegram (Embeded links). We do not plan
                        to make changes that will directly impact the promotion or advertising of the tokens, these 
                        updates will mainly be done to improve the protection of the website and the users of the 
                        website.
                        </p> 
            
                        </div>

                    </Card.Body>
                </ Card>
            </Container>

            <Footer />
        </div>
       
    )
}

export default Terms
