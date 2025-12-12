import React from 'react'
import EmployeeTable from './EmployeeTable'


const UserHomeView = ({employees, isAdmin}) => {
  return (
    <div className="p-25">

            <EmployeeTable employees={employees} isAdmin={isAdmin}/>

    </div>
  )
}

export default UserHomeView