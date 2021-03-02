import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './ReposItem'

function Repos({repos}) {
    // return <h1>This is a repos</h1>
    return repos.map(repo => <RepoItem repo={repo}  key={repo.id}  />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default Repos
