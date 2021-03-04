import Navbar from '../src/components/layouts/Navbar'
import Users from '../src/components/users/Users'
import User from '../src/components/users/User'
import Search from '../src/components/users/search'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Alert} from './components/layouts/Alert'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {

    fetchData()
  }, [])


  // search single github user


 // get Users Repo
 const getUserRepos = async (username) => {
  setLoading(true)
  const res = 
  await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  setRepos(res.data)
  console.log(username)
  setLoading(false)
}



 
//    // show alert on any error 
//  setAlert({msg: msg, type: type})


  const fetchData = async () => {
    // setLoading(true)
    // const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //  setUsers(res.data)
    // setLoading(false)
  }


  return (
<GithubState>
<Router>
    <div className="App">
      <Navbar />
      <div className="container">
      <Alert alert={alert} />
        {/* the home page */}
      <Route exact path = "/"  render = {(props) => (
        <><Search setAlert={setAlert}/>
        <Users  />
        </>
      )}/>
      <Route exact path = "/about" component = {About}  />
      <Route exact path = "/user/:login" 
       render = {props => (
         <User {...props} 
         getUserRepos ={getUserRepos}
         repos={repos}
          />
       )}
      />


  
      </div>
    </div>
    </Router>
    </GithubState>
  );
}

export default App;
