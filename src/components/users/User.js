import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const [user, setUser] = useState({
        name:'',
        username: '',
        email: '',
        phone: '',
        website: ''
    });
    const {id } = useParams()
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async() => {
        const res = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(res.data)
    }
    return <div className='container py-4'> 
    <Link to='/'>
        back Home
    </Link>
    <h1>User Id: {id}</h1>
    <ul>
        <li>name: {user.name}</li>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
        <li>phone: {user.phone}</li>
        <li>website: {user.website}</li>
    </ul>
    </div>
}

export default User;
