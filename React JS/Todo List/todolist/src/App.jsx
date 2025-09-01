import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';


function App() {

  let [userText, setUserText] = useState();
  let [allTodo, setAllTodo] = useState([])


  let addTodo = (event) => {

    let obj = {
      title: userText,
      isStatus: true
    }

    
    //allTodo filter() -> Multiple value =[]
    //allTodo find() -> Single Element -> singh object


    let checkTodo = allTodo.find((obj) => obj.title == userText)

    if (checkTodo) {
      toast.error('Todo List Already Added')
    }
    else {
      setAllTodo([...allTodo, obj])
      toast.success('Todo List Added in My List')
      setUserText('')
    }
    event.preventDefault()
  }

  let changeStatus = (currentIndex) => {
    let oldData=[...allTodo] //Shallow Copy
    oldData[currentIndex].isStatus=! oldData[currentIndex].isStatus
    setAllTodo(oldData)
  }
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-violet-100 to-purple-200 flex flex-col items-center justify-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-5xl font-extrabold text-purple-700 flex items-center gap-2">
            <span className="text-4xl">✨</span>
            Todo List
          </span>
          <p className="text-gray-500 text-lg font-medium mt-2">
            Stay organized and productive
          </p>
        </div>

        {/* Input Box */}
        <form className="w-full max-w-xl" onSubmit={addTodo}>
          <div className="flex items-center bg-white  shadow-2xl px-6 py-4">
            <input
              type="text"
              placeholder="Add a new task..."
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg px-2"
            />
            <button type="submit" className="ml-4 bg-gradient-to-tr from-purple-500 to-violet-400 hover:from-purple-600 hover:to-violet-500 text-white p-3 rounded-xl text-2xl flex items-center justify-center shadow-md transition">
              +
            </button>

          </div>

         <div className="bg-white w-vh rounded">
          <ul className="p-3">

            {
              allTodo.length >= 1 ?
                allTodo.map((items, index) => {
                  return (
                    <li
                    
                    

                    key={index} className={`p-3 text-[20px] border-b-2 relative font-bold
                      
                      ${items.isStatus ? '' : 'line-through'}`}>

                      <span onClick={() => changeStatus(index)}>
                        {items.title}
                      </span>
                        
                         <button className="bg-red-500 absolute right-0 mr-3 text-white rounded px-2 text-[16px]"
                         >Delete</button> </li>
                  )
                })

                :
                <li>No Data Found</li>
            }
          </ul>
        </div>


        </form>

       

        <ToastContainer />
        {/* //Yeh Comonent Pahle Se Hide Pada Hai Jab Main Chahunga Ise Dikhaunga */}

      </div>

    </>
  );
}

export default App;
