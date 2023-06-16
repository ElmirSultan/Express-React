import React, { useEffect } from 'react'
import "./addedit.css"
import { useState } from 'react'

import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
const initialState = {
    name:"",
    email:"",
    country:"",
    contact:""
}

const AddEdit = () => {
    const [data,setData] = useState(initialState);
    const {name,email,country,contact} = data

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            getSingleUser(id)
        }
    },[id])

    const getSingleUser = async (id)=> {
        const res = await axios.get(`http://localhost:5000/users/${id}`)
        if(res.status === 200){
            setData({...res.data})
        }
    }


    const cretaUser = async (data)=> {
        const res = await axios.post("http://localhost:5000/users/",data)
        if(res.status === 200){
            // window.confirm(res.data)
            toast.success(res.data)
        }
    }

    const updateUser = async (data,id)=> {
        const res = await axios.put(`http://localhost:5000/users/${id}`,data)
        if(res.status === 200){
            // window.confirm(res.data)
            toast.success(res.data)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email || !country || !contact){
            toast.error("Please fill all the fields")
            return;
        }
        if(!id){
            cretaUser(data)
        }else{
            updateUser(data,id)
        }
        navigate("/")
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input value={name} type="text" onChange={handleInputChange} id='name' name='name' placeholder='Enter a name'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">E-mail</label>
                <input type="email" value={email} onChange={handleInputChange} id='email' name='email' placeholder='Enter an email address'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="country">Country</label>
                <input value={country} type="text" id='country'  onChange={handleInputChange} name='country' placeholder='Country name'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="contact">Contact</label>
                <input type="text" value={contact} id='contact' name='contact'  onChange={handleInputChange} placeholder='Contact number'/>
            </div>
            <input type="submit" className='btn btn-success' value={id ? "Update" : "Add"} />
        </form>
    </div>
  )
}

export default AddEdit