import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({showClear, clearUsers, setAlert, searchUsers}) => {
 const [text, setText] = useState('');


  const  onChange = (e) => setText(e.target.value)
    // we use arrow function to bind the function to the file and access stuff like this
 const  onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert({msg: 'Please enter something', type:'light'})
            setTimeout(()=> setAlert(null), 3000) 
        }else{
        searchUsers(text)
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
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
            </button> }    
            </div>
        )
 
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search;