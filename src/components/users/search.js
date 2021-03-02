import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    state = {
        text: '',
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    // we use arrow function to bind the function to the file and access stuff like this
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert({msg: 'Please enter something', type:'light'})
            setTimeout(()=> this.props.setAlert(null), 3000) 
        }else{
        this.props.searchUsers(this.state.text)
        this.setState({text: ''})
        }
 
    }
    render() {
      const {showClear, clearUsers} = this.props;  
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" id=""
                        onChange={this.onChange}
                        value={this.state.text} placeholder="Search Users..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            {this.props.showClear &&   <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>
            Clear
            </button> }    
       

            </div>
        )
    }
}
