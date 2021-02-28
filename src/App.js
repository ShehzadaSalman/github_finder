import Navbar from '../src/components/layouts/Navbar'
import Users from '../src/components/users/Users'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    const res = await axios.get('https://api.github.com/users')
    console.log(res.data);
    setUsers(res.data)
    setLoading(false)
  }


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
