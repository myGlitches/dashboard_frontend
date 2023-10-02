import React from 'react'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'


function StudentsTable({ getUsers, users }) {
    

  return (
      <>
        <div className="flex-column justify-between studentsTable">
              <div className="tablePart">
                  <table className= "mainTable rounded-tl-[10px] rounded-tr-[10px] w-full mx-0 my-3 bg-white shadow">
                <tbody>
                   <tr className='bg-slate-100'>
                        <th className='text-left'>No.</th>
                        <th className='text-left'>Student Name</th>
                        <th className='text-left'>Class</th>
                        <th className='text-left'>Result</th>
                        <th className='text-left'>Score</th>
                        <th className='text-left'>Grade</th>
                        <th className='text-left'></th>
                        <th className='text-left'></th>
                    </tr>
                    {users.map((user, index) => {
                        return (
                        <tr className="eachRow" key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.class}{user.class === 1 ? "st" : (user.class === 2 ? "nd" : (user.class === 3 ? "rd" : "th")) }</td>
                            <td>{user.score <=30 ?
                            
                            <div className="w-[55px] h-5 px-2 py-0.5 bg-red-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-xs font-semibold font-['Montserrat'] leading-none tracking-tight">
                                Failed
                                </div>
                            </div>
                            :
                            <div className="w-[62px] h-5 px-2 py-0.5 bg-green-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-xs font-semibold font-['Montserrat'] leading-none tracking-tight">
                                Passed
                                </div>
                            </div>
                            
                            
                            }
                            </td>
                                <td>{user.score}/100</td>
                                <td>{user.grade}</td>
                                <td>
                                    <div className="editBtn">
                                        <EditModal
                                            userId={user._id} 
                                            userName={user.name} 
                                            userClass={user.class} 
                                            userScore={user.score} 
                                            userGrade={user.grade} 
                                            getUsers={getUsers} />
                                    </div>
                                </td>
                                <td>
                                    <div className="deleteBtn">
                                        <DeleteModal
                                            userId={user._id}
                                            userName={user.name}
                                            userClass={user.class}
                                            getUsers={getUsers} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })} 
                </tbody>
          </table>
          
              </div>
                      <div className="tableFooterPart text-neutral-800 text-xs font-normal font-['Montserrat'] leading-none">Showing {users.length} of {users.length} entries</div>

        </div>
      </>
  )
}

export default StudentsTable