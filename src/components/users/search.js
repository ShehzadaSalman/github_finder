import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import PropTypes from 'prop-types'

const Search = () => {
 
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState('');
    
  

  const  onChange = (e) => setText(e.target.value)
    // we use arrow function to bind the function to the file and access stuff like this
 const  onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert({msg: 'Please enter something', type:'light'})
            // setTimeout(()=> setAlert(null), 3000) 
        }else{
        githubContext.searchUsers(text)
        setText('')
        }
  
    }
 
    
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" id=""
                        onChange={onChange}
                        value={text} placeholder="Search Users..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            {(githubContext.users.length > 0) && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
            Clear
            </button> }    
            </div>
        )
 
}


export default Search;