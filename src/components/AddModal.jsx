import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios"


export default function Modal({ getUsers }) {
  const [showModal, setShowModal] = useState(false);

  const [studentData, setstudentData] = useState({
    class: 1,
    grade: "",
    name: "",
    is_passed: false,
    score: 0,
  });

  // Handle Change
  const handleChange = (e) => {
  console.log('handleChange called with', e.target.name, e.target.value);
  const { name, value } = e.target;
  setstudentData({
    ...studentData,
    [name]: value
  });
};

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
      class: studentData.class,
      grade: studentData.grade,
      name: studentData.name,
      is_passed: studentData.is_passed,
      score: studentData.score
    }
      const response = await axios.post("https://studentdashboard.up.railway.app/students", userData)
      console.log(userData)
      console.log(response.data)
      getUsers()
      setShowModal(false)
      
    } catch (error) {
     console.log(error) 
    }
      
  };

  // var gradeText;
  // if (studentData.score >= 0 && studentData.score <= 30) {
  //   gradeText = "Poor"
  // }
  // else if (studentData.score >= 31 && studentData.score <= 75) {
  //   gradeText = "Average"
  // }
    
  // else if (studentData.score >= 76 && studentData.score <= 100) {
  //   gradeText = "Excellent"
  // } 


  return (
    <>
          {/* <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl font-montserrat">
            +ADD
          </button> */}
          <div onClick={() => setShowModal(true)} className="hover:cursor-pointer w-[123px] h-[42px] px-8 py-2 bg-sky-500 rounded-[10px] shadow justify-center items-center gap-2 inline-flex">
              <div className="justify-start items-center gap-1 flex ">
                  <div className=" relative font-bold font-montserrat text-white text-2xl">+</div>
                  <div className="text-center font-bold font-montserrat text-white text-2xl uppercase leading-relaxed tracking-wider">add</div>
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
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-bold">
                    Add Student
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <label htmlFor="student_name" className="text-gray-500 text-xs font-medium font-['Montserrat'] uppercase leading-none tracking-tight">
                    STUDENT NAME*
                  </label>
                  <div className="flex-column">
                    <input
                    type="text"
                    name="name"
                    value={studentData.name}
                    onChange={handleChange}
                      className=" w-[502px] mt-4 shadow appearance-none border rounded py-2 px-1 text-black" />
                    {/* Name Length Validation */}
                  {studentData.name.length === 0 ? <label className="text-red-500 text-xs font-normal font-['Montserrat'] leading-none">Error: Name field cannot be left blank</label> : "" }
                  </div>
                    
                                  
                  <label htmlFor="class" className="text-gray-500 text-xs font-medium font-['Montserrat'] uppercase leading-none tracking-tight">
                    CLASS*
                  </label>
                  <div className="flex-column">
                    <input
                    type="number"
                    name="class"
                    max="12"
                    min="1"
                    value={studentData.class}
                    onChange={handleChange}
                    className="w-[502px] my-4 shadow appearance-none border rounded py-2 px-1 text-black" />              
                    {/* Class Validation */}
                  {studentData.class < 1 || studentData.class > 12 ? <label className="text-red-500 text-xs font-normal font-['Montserrat'] leading-none">Error: Please input values between 1 & 12</label> : "" }
                  </div>
                                  
                  <label htmlFor="score" className="text-gray-500 text-xs font-medium font-['Montserrat'] uppercase leading-none tracking-tight">
                    SCORE*
                  </label>
                  <div className="flex-column">
                    <input
                    type="number"
                    name="score"
                    value={studentData.score}
                    onChange={handleChange}
                    className="w-[502px] my-4 shadow appearance-none border rounded py-2 px-1 text-black" />                            
                    {studentData.score < 0 || studentData.score > 100 ? <label className="text-red-500 text-xs font-normal leading-none">Error: Please ensure score is between 0 & 100</label> : "" }
                  </div>
                    
                  <div className="flex-column">
                    <label
                      className="text-gray-500 my-7 mt-10 text-xs font-medium font-['Montserrat'] uppercase leading-none tracking-tight">
                      GRADE
                    </label>
                    <div>
                      {studentData.score >= 0 && studentData.score <= 30 ? studentData.grade = "Poor" :
                        (studentData.score >= 31 && studentData.score <= 75 ? studentData.grade = "Average"
                          : studentData.grade = "Excellent")
                        }
                    </div>
                  </div>


                  <div className="flex-column">
                    <label className="text-gray-500 my-4 text-xs font-medium font-['Montserrat'] uppercase leading-none tracking-tight">
                    RESULT
                  </label>
                    <div>
                      {studentData.score === 0 ?
                        "" :
                        studentData.score >= 30 ? 
                        (
                      <div className="w-[62px] h-5 px-2 py-0.5 bg-green-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-xs font-semibold font-['Montserrat'] leading-none tracking-tight">
                                Passed
                                </div>
                        </div> 
                        
                      )
                        
                        :
                          <div className="w-[55px] h-5 px-2 py-0.5 bg-red-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-xs font-semibold font-['Montserrat'] leading-none tracking-tight">
                                Failed
                                </div>
                            </div>
                      }
                    </div>
                  </div>
                                  

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  
                <div className="w-[98px] h-[38px] px-4 py-1.5 rounded-[10px] shadow border border-sky-500 justify-center items-center gap-2.5 inline-flex">
                    <div onClick={() => setShowModal(false)} className=" hover:cursor-pointer text-center text-sky-500 text-sm font-semibold font-['Montserrat'] uppercase leading-relaxed tracking-wider">
                      CANCEL
                    </div>
                </div>
                  
                    <div className="w-[110px] h-[38px] ms-5 px-4 py-1.5 bg-sky-500 rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
                    <button type="submit" onClick={() => {
                      handleSubmit()
                        }} className=" hover:cursor-pointer text-center text-white text-sm font-semibold font-['Montserrat'] uppercase leading-relaxed tracking-wider">
                            CONFIRM
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