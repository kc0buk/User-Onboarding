import React from 'react'

function Users({ details }) {
    if (!details) {
        return <h3>Fetching users...please wait.</h3>
    }

    return (
        <div className=''>
            <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
    )
}

export default Users