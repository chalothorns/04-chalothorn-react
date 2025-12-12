import React from 'react'
import EmployeeTable from './EmployeeTable'


const UserHomeView = () => {
  return (
    <div className="p-25">

            <EmployeeTable isAdmin={false}/>

    </div>
  )
}

export default UserHomeView