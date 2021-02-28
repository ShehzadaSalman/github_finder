import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'

const User = ({ users, loading }) => {
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