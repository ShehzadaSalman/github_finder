import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        text: '',
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    // we use arrow function to bind the function to the file and access stuff like this
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" id=""
                        onChange={this.onChange}
                        value={this.state.text} placeholder="Search Users..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

            </div>
        )
    }
}
