import React, {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/github/githubContext'

const User = () => {
const githubContext = useContext(GithubContext)

const {loading, users} = githubContext;
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(li => (
                    <UserItem key={li.id} user={li} />
                ))}
            </div>
        )
    }


}
export default User

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}