import React from 'react'
import Leaderboard from '../../components/leaderboard';
import NavigationBar from '../../components/navbar';
import Promoted from '../../components/promoted';
import LeaderboardWithTabs from '../../components/LeaderboardWithTabs';
import './styles.css';

const Home = () => {
    return (
        <div className='homeBackground'>
            <NavigationBar />
            <div className="promotedTable">
                <h2>Promoted</h2>
                <Leaderboard  promoted="True"/>
            </div>
            <div className="promotedTable">
                <LeaderboardWithTabs />
            </div>
            
        </div>
    )
}

export default Home
