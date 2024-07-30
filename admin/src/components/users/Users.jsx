import React, { useEffect } from 'react'
import './Users.css'
import axios from 'axios'

const Users = ({name,city,paid,year,department,division,id, onDelete}) => {

  const url = 'http://localhost:4000'

  const deleteUser = async () => {
    try {
        const response = await axios.delete(`${url}/deleteUser/${id}`)
        console.log('sucess deleting the users')
        onDelete(id)
    } catch (error) {
        console.log('Error deleting the users',error)
    }
}


  return (
    <div className='users'>
        <div className='head-row'>
                <span>{name}</span>
                <span>{city}</span>
                <span>{paid}</span>
                <span>{division}</span>
                <span>{year}</span>
                <span>{department}</span>
                <button onClick={deleteUser}>x</button>
            </div>
    </div>
  )
}

export default Users