import Navbar from '../src/components/layouts/Navbar'
import Users from '../src/components/users/Users'
import Search from '../src/components/users/search'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res.data);
    setUsers(res.data)
    setLoading(false)
  }


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search />
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
