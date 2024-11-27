import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({ username: '', password: '' })

    const handleLogin = async () => {

        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(data),
            }
            )
            const data = await res.json();
            if (data.success === false) {
                setError(data.message);
                setTimeout(() => {
                    setError(null);
                }, 3000)
            }
            else {
                setLoading(false);
                setError(null);
                console.log(data);
                useNavigate('/subjects')
            }
        } catch (err) {
            setLoading(false);
            setError("Error Logging In");
            setTimeout(() => {
                setError(null);
            }, 3000)
        }
    }

    return (
        <div className='bg-sky-50 h-[100vh] w-[100vw] flex justify-center items-center'>
            <div className='w-[50%] h-[70%] p-10 border gap-12 flex-col flex items-center justify-center rounded-3xl m-20 shadow relative'>
                <h1 className='text-xl absolute top-20 '>COCO</h1>
                <h1 className='text-center text-5xl font-bold'>Login</h1>
                <form action="" className='flex flex-col gap-4 w-[80%] '>
                    <input type="text" placeholder='Username' id='username' className='px-6 py-3 rounded-lg ' value={data.username} onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })} />
                    <input type="password" placeholder='Password' id='password' className='px-6 py-3 rounded-lg ' value={data.password} onChange={(e) => setData({ ...data, [e.target.id]: e.target.value })} />
                    <Button type="button" variant='primary' className='hover:bg-white hover:text-neelo-700 py-3 text-xl bg-neelo-700' onClick={handleLogin} disabled={loading}>Login</Button>
                </form>
                {error && <Alert variant='danger' className='absolute bottom-5'>{error}</Alert>}
            </div>

        </div>
    )
}

export default Login