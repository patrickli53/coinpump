import React from 'react'
import Leaderboard from '../../components/leaderboard';
import NavigationBar from '../../components/navbar';
import Footer from '../../components/footer';
import LeaderboardWithTabs from '../../components/LeaderboardWithTabs';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const Home = () => {
    return (
        <div className='homeBackground'>
            <NavigationBar />
            <Container>
                <Row>
                    <Col className="coinupdate" lg='3'> New Coin Updates!</Col>
                    <Col className='welcome' lg='6'> 
                        <h1>Welcome to <span className='cg'>CoinGalaxy</span></h1>
                        <h2> Find the most hyped coins in the galaxy</h2>
                    </Col>
                    <Col className="coinupdate" lg='3'>
                        Advertisement component
                    </Col>
                </Row>
            </Container>
            <div className="promotedTable">
                <h2>Promoted</h2>
                <Leaderboard  promoted="True"/>
            </div>
            <div className="promotedTable">
                <LeaderboardWithTabs />
            </div>
            
            <Footer />
        </div>
    )
}

export default Home
