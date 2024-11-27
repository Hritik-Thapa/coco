import React from 'react'
import { Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Username' id='username' />
                <input type="password" placeholder='Password' id='password' />
                <Button type="submit" variant='primary' className=''>Login</Button>
            </form>
        </div>
    )
}

export default Login