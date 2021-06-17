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
import Login from './pages/login';
import SignUpPage from './pages/signuppage';
import { AuthProvider } from './contexts/AuthContext'
import emailSent from './pages/signuppage/emailSent'
import passwordReset from './pages/login/resetPassword'
import TermsOfService from './pages/terms'
import CoinGalaxyToken from './pages/CoinGalaxyToken'
import CoinPage from './pages/CoinPage';

function App() {
  console.log("omar")
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/addcoin' component={AddCoin}/>
          <Route path='/promote' component={Promote} />
          <Route path='/termsofservice' component={TermsOfService} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUpPage}/>
          <Route path='/verification' component={emailSent}/>
          <Route path='/resetPassword' component={passwordReset}/>
          <Route path='/coingalaxytoken' component={CoinGalaxyToken}/>
          <Route path="/coin/:coinId" component={CoinPage}/>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
