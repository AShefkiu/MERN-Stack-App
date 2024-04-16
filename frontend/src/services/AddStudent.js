/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { addOne } from './services/students'


const AddStudent = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await addOne({ fullname: name, email: email });
        console.log('ok', response)
    } catch (error) {
        console.log('error', error)
    }
    // console.log(name, email)
}

    return (
        <form onSubmit={handleSubmit}>

                <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" classForm="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" classForm="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

                <div class="foNamerm-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" classForm="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
                <div class="foNamerm-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" classForm="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

                <div className="form-group form-check">
            <input type="checkbox" classForm="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
                <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    )
}
export default AddStudent