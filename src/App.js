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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/addcoin' component={AddCoin}/>
          <Route path='/promote' component={Promote} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUpPage}/>
          <Route path='/verification' component={emailSent}/>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
