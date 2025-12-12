import React from 'react'

const UserHomeView = () => {
  return (
    <div className="p-25">

            <table class="border-collapse border border-gray-400 ">
                <thead className="bg-gray-100">
                    <tr>
                        <th class=" border border-gray-300 px-30 py-4 ">Name</th>
                        <th class="border border-gray-300 px-30 py-4">Last Name</th>
                        <th class="border border-gray-300 px-30 py-4">Position</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td class="border border-gray-300 px-0 py-4 "></td>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                        <td class="border border-gray-300 px-30 py-4 "></td>
                    </tr>
                </tbody>
            </table>


    </div>
  )
}

export default UserHomeView