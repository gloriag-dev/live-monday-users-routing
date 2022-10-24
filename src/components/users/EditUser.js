
import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'


const EditUser = () => {
let navigate = useNavigate()
const {id} = useParams()
const [user, setUser] = useState({
    name:'',
    username: '',
    email: '',
    phone: '',
    website: ''
});

const {name, username, email, phone, website} = user;
const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

useEffect(() => {
    loadUser()
}, [])

const loadUser = async ()=> {
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(result.data)
}

const onSubmit = async e => {
    e.preventDefault()
    await axios.put(`http://localhost:3003/users/${id}`)
    navigate('/')
}

    return  <div className='container'>
    <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add User</h2>
        <form onSubmit={e => onSubmit(e)}>
    <div className='form-group'>
        <input type='text' className="form-control" name='name' value={name} onChange={e => onInputChange(e)}></input>
    </div>
    <div className='form-group'>
        <input type='text' className="form-control" name='username' value={username} onChange={e => onInputChange(e)}></input>
    </div>
    <div className='form-group'>
        <input type='email' className="form-control" name='email' value={email} onChange={e => onInputChange(e)}></input>
    </div>
    <div className='form-group'>
        <input type='text' className="form-control" name='phone' value={phone} onChange={e => onInputChange(e)}></input>
    </div>
    <div className='form-group'>
        <input type='text' className="form-control" name='website' value={website} onChange={e => onInputChange(e)}></input>
    </div>
    <button type='submit'> Add User</button>
        </form>
    </div>
            </div>
        
}

export default EditUser