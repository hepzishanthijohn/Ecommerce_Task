import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import './Admin/Admin.css'
import AdminNavbar from '../AdminNavbar/AdminNavbar'


function Portal() {
    return (
        <>
        <AdminNavbar/>
        <div className='admin'>
            
            <Sidebar/>
            <Outlet></Outlet>
            
        </div>
        </>
    )
}

export default Portal