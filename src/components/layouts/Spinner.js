import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
    return (
        <>
            <img src={spinner} alt="loading"
                style={{ width: '50px', display: 'block', margin: 'auto' }}
            />
        </>
    )
}

export default Spinner
