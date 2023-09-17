"use client"
import React , {useState} from 'react'

const page = () => {
  
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
  }
  const deleteHandler = (i) => {
   let copyTask = [...mainTask]
   copyTask.splice(i,1)
   setmainTask(copyTask)
  }

  let renderTask = <h2 className='text-2xl font-bold'>No task available</h2>
if (mainTask.length>0) {
  renderTask = mainTask.map((t,i)=>{
    return <li key={i} className='flex justify-between items-center mb-8'>
      <div className='w-2/3 flex justify-between items-center'>
      <h5 className='text-2xl font-bold'>{t.title}</h5>
      <h5 className='text-xl '>{t.desc}</h5>
      </div> 
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className='p-2 px-5 bg-red-500 text-white rounded font-bold'
      >Delete</button>
    </li>
  })
}

  return (
    <>
    <h1 className='bg-lightblue text-center p-5 text-white font-bold text-2xl'>My todo List</h1>
    <form onSubmit={submitHandler}>
      <input 
      type='text'
      className='bg-gray m-5 px-3 py-2 border-zinc-800 text-2xl border-2 rounded'  
      placeholder='Enter you title'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input 
      type='text'
      className='bg-gray m-5 px-3 py-2 border-zinc-800 text-2xl border-2 rounded'  
      placeholder='Enter your description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
    <button className='m-5 px-2 py-3 bg-slate-400 rounded font-bold'>Add Task</button>
    </form>
    <hr/>
    <div className='bg-slate-200 p-9'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page