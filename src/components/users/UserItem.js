import React from 'react'
import PropTypes from 'prop-types'

export const UserItem = (props) => {


    return (
        <div className='card  d-flex align-items-center p-4' style={{ textAlign: 'center' }}>
            <img src={props.user.avatar_url}
                className="rounded"
                style={{ width: '60px' }}
                alt="avatar" />
            <h4>{props.user.login}</h4>
            <div>
                <a href={props.html_url} className="btn btn-secondary my-1">
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

