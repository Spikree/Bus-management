import React, { useEffect, useState } from 'react'
import './Table.css'
import Users from '../users/Users'
import axios from 'axios'

const Table = () => {

    const [users, setUsers] = useState([]);
    
    const url = 'http://localhost:4000'

    const Fetchusers = async () => {
        try {
            const response = await axios.get(url+'/getUsers');
            setUsers(response.data)
            console.log('sucess fetching the users')
        } catch (error) {
            console.log('Error fecthing the users',error)
        }
    }

    const handleDelete = (id) => {
        setUsers(users.filter(user => user._id !== id));
    };

    useEffect(() => {
        Fetchusers();
    },[])

    return (
        <div className='table'>

            <div className='head-row'>
                <span>name</span>
                <span>city</span>
                <span>paid</span>
                <span>class</span>
                <span>year</span>
                <span>department</span>
            </div>
                
                {
                    users.map((user,index) => {
                        return <Users key={index}
                            id={user._id}
                            name={user.name}
                            department={user.department}
                            city={user.city}
                            paid={user.paid}
                            division={user.class}
                            year={user.year}
                            onDelete={handleDelete}
                        />
                    })
                }
        </div>
    )
}

export default Table