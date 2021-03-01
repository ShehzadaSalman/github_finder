import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export const UserItem = (props) => {


    return (
        <div className='card  d-flex align-items-center p-4' style={{ textAlign: 'center' }}>
            <img src={props.user.avatar_url}
                className="rounded"
                style={{ width: '60px' }}
                alt="avatar" />
            <h4>{props.user.login}</h4>
            <div>
                <Link to={`/user/${props.user.login}`} className="btn btn-secondary my-1">
                More
                </Link>
            </div>
        </div>
    )

}

export default UserItem

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

