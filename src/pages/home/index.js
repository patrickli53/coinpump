import React from 'react'
import Leaderboard from '../../components/leaderboard';
import NavigationBar from '../../components/navbar';
import BannerAds from '../../components/BannerAds'
import Footer from '../../components/footer';
import LeaderboardWithTabs from '../../components/LeaderboardWithTabs';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import CoinUpdate from '../../components/coinUpdates';

const Home = () => {
    return (
        <div>
            <div className='homeBackground'>
                <NavigationBar />
                    <Row className='topbanner2'>
                        <Col className="coinupdate leftComp" lg='6' md='12'><CoinUpdate /> </Col>
                        <Col className="coinupdate" lg='6' md='12'>
                            <BannerAds/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='welcome' lg='12'> 
                            <h1>Welcome to <span className='cg'>CoinGalaxy</span></h1>
                            <h2> Find the most hyped coins in the galaxy</h2>
                        </Col>
                    </Row>
                <div className="promotedTable">
                    <h2>Promoted</h2>
                    <Leaderboard  promoted="True" searchText=''/>
                </div>
                <div className="promotedTable">
                    <LeaderboardWithTabs />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Home
