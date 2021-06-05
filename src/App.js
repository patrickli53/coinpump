import './App.css';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCoin from './pages/addcoin';
import Promote from './pages/promote';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/addcoin' component={AddCoin}/>
        <Route path='/promote' component={Promote} />
      </Switch>
    </Router>
  );
}

export default App;
