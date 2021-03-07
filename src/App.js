import Navbar from '../src/components/layouts/Navbar'
import Users from '../src/components/users/Users'
import User from '../src/components/users/User'
import Search from '../src/components/users/search'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Alert} from './components/layouts/Alert'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css'
import { NotFound } from './components/pages/NotFound'

const App =  () => {


// set Alert 




 
//    // show alert on any error 
//  setAlert({msg: msg, type: type})



  return (
<GithubState>
  <AlertState>
<Router>
    <div className="App">
      <Navbar />
      <div className="container">
      <Alert />
        {/* the home page */}
        <Switch>
      <Route exact path = "/"  render = {(props) => (<><Search/><Users/></>)}/>
      <Route exact path = "/about" component = {About}  />
      <Route exact path = "/user/:login" component = {User} />
      <Route component={NotFound} />      
      </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
