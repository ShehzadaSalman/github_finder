import React, { useEffect, useContext } from 'react'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'
const User = (props) => {
const githubContext = useContext(GithubContext)
const {getUser, loading, user} = githubContext;

useEffect(() =>{
        getUser(props.match.params.login);
        props.getUserRepos(props.match.params.login);
    }, [])
   
  

        const {
            name, avatar_url,company,
            location, bio,blog, login, html_url, followers,
            following, public_repos, public_gists, hireable
       } = githubContext.user;
       const {repos} = props;
       
       if(loading) return <Spinner/>
       return ( 
            <>
            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable: {''}
            {hireable ? <i className="fas fa-check text-success"></i>
           : <i className="fas fa-times-circle text-danger"></i>    
            }
        <div className="card grid-2">
          <div className="all-center">
         <img src = {avatar_url} className="round-img" style={{width: '150px'}} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
          </div>
 
         <div>
             {bio && (
                 <>
                     <h3>Bio</h3>
                     <p>{bio}</p>
                 </>
             )}
             <a href={html_url} className =" btn btn-dark my-1">
                 Visit Github Profile
             </a>
             <ul className="m-0 p-0">
                  <li>
                     {login && <>
                      <strong>Username:</strong> {login}
                     </>}
                 </li>
                 <li>
                     {company && <>
                      <strong>Company:</strong> {company}
                     </>}
                 </li>
                 <li>
                     {blog && <>
                      <strong>Website:</strong> {blog}
                     </>}
                 </li>
                
             </ul>

         </div>


        </div>
        <div className="card text-center">
            <div className="row">
            <div className="col-3">
          <div className="badge badge-primary">Followers: {followers} </div>
          </div>
          <div className="col-3">
          <div className="badge badge-success">Following: {following} </div>
          </div>
         
         <div className="col-3">
         <div className="badge badge-light">Public Repos: {public_repos} </div>
         </div>
         
         <div className="col-3">
         <div className="badge badge-dark">Public Gists: {public_gists} </div>
         </div>
            </div>
         </div>
        <Repos repos={repos} />          
  
            </>
        )
    }


User.propTypes = {
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User
