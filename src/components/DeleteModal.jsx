import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios"
import deleteIcon from '../assets/delete_icon.jpg'


function DeleteModal({
  getUsers,
  userId,
  userName,
  userClass
}) {
  const [showModal, setShowModal] = useState(false);


  // Handle Submit
  const handleSubmit = async (e) => {
      e.preventDefault();
      const id = userId
      console.log(userId)
    try {
      const response = await axios.delete(`https://studentdashboard.up.railway.app/students/${id}`)
      console.log(response.data)
      getUsers()
      setShowModal(false)
    } catch (error) {
     console.log(error) 
    }
      
  };


  return (
    <>
          <div onClick={() => setShowModal(true)}>
              <div className="justify-start items-center gap-1 flex">
          <div className=" relative font-bold font-montserrat text-black">
            <img src={deleteIcon} className="hover:cursor-pointer" height="auto" width="24px" alt="" />
                  </div>
              </div>
          </div>
          
      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex-column items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-bold mb-4">
                    Remove Student
                  </h3>
                  <h4 className=" text-neutral-800 text-base font-semibold font-['Montserrat'] leading-normal">Are you sure you want to remove the current student from the list?</h4>
                  <h3 className="text-gray-500 text-xs mt-4 font-medium font-['Montserrat'] uppercase leading-none tracking-tight">Student name</h3>
                  <h3 className="text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px] tracking-tight mt-3">{ userName }</h3>
                  <h3 className="text-gray-500 text-xs mt-4 font-medium font-['Montserrat'] uppercase leading-none tracking-tight">Class</h3>
                  <h3 className="text-neutral-800 text-sm font-normal font-['Montserrat'] leading-[18px] tracking-tight mt-3">{ userClass }</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  
                <div className="w-[98px] h-[38px] px-4 py-1.5 rounded-[10px] shadow border border-sky-500 justify-center items-center gap-2.5 inline-flex">
                    <div onClick={() => setShowModal(false)} className="hover:cursor-pointer text-center text-sky-500 text-sm font-semibold font-['Montserrat'] uppercase leading-relaxed tracking-wider">
                      CANCEL
                    </div>
                </div>
                  
                    <div className="w-[110px] h-[38px] ms-5 px-4 py-1.5 bg-red-500 rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
                    <button type="submit" onClick={() => {
                      handleSubmit()
                        }} className="text-center hover:cursor-pointer text-white text-sm font-semibold font-['Montserrat'] uppercase leading-relaxed tracking-wider">
                            REMOVE
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default DeleteModal