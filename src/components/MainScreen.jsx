import React from 'react'
import AddModal from "./AddModal"
import StudentsTable from './StudentsTable'
import { useState, useEffect } from 'react'
import axios from 'axios'


function MainTable() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get("https://studentdashboard.up.railway.app/students")
        const data = response.data.data
        setUsers(data)
        }

    // Fetching All Students
    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        <div className="part-2 flex-column h-screen w-full p-3">
            <div className="mainHeader flex justify-between">
            <h1 className="flex w-full text-neutral-800 text-xl font-bold leading-normal font-montserrat" >Students</h1>
            <AddModal getUsers={getUsers} />
            </div>
            <StudentsTable getUsers={getUsers} users={users} />
        </div>
    )
}

export default MainTable