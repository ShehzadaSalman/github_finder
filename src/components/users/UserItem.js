import React from 'react'
import PropTypes from 'prop-types'

export const UserItem = ({ id, login, avatar_url, html_url }) => {


    return (
        <div className='card  d-flex align-items-center p-4' style={{ textAlign: 'center' }}>
            <img src={avatar_url}
                className="rounded"
                style={{ width: '60px' }}
                alt="avatar" />
            <h4>{login}</h4>
            <div>
                <a href={html_url} className="btn btn-secondary my-1">
                    More
                    </a>
            </div>
        </div>
    )

}

export default UserItem

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

