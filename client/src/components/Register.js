import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/AlertContext'
import AuthContext from '../context/auth/AuthContext'

const Register = props => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const { setAlert } = alertContext;

    const { registerUser, error, clearError, isAuthenticated } = authContext;


    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: ''})

        useEffect(() => {
            if(isAuthenticated) props.history.push('/')
            if(error){
                //console.log(error)
                setAlert(error);
                clearError();
            }
        }, [error, isAuthenticated, props.history])

        const { name, username, email, password } = user;
        const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault()
            if(name === '' || username === '' || email === '' || password === '') setAlert("All fields are required.")
            else registerUser({name, username, email, password})
        }

    return (
        <div className="form-container">
            <h1>Account Registration</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' name='name' value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' name='username' value={username} onChange={onChange} required />
                </div>
                <div className="form-group">
                <label htmlFor='email'>Email Address</label>
                <input id='email' type='email' name='email' value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name='password' value={password} onChange={onChange} required minLength='6' />
                </div>
                <input type='submit' value='Register'className='btn btn-primary btn-block'/>
            </form>
            
        </div>
    )
}

export default Register
