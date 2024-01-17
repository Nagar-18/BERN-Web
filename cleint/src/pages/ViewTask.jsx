import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Navigation from './Navigation';
const ViewTask = () => {
  const [todo,setTodo]=useState({});
  const [flag,setflag]=useState(true);
 const idRef=useRef();
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        
     
        try {
            const res=await fetch(`https://bern-todo.vercel.app/etherum/api/view-task/${idRef.current.value}`,{
                method:'GET',
                headers:{
                    "content-type":"application/json"
                }
            })
            const data= await res.json();
         
            if(data.status===200)
            {
               setTodo(data.taskObj);
               setflag(false);
            }
        
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{},[todo]);
 console.log(todo);

  return (
    <>
       <Navigation/>
      
        
      
       <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
       
     <form onSubmit={handleOnSubmit} style={{height:'40vh', width:'50vw',alignContent:'center',padding:'4vh 4vh',border:' 2px solid white'}}>
       <h2>View Your Note Here</h2>
       {flag?<> <div style={{margin:'8px'}}> <input ref={idRef} type="text" placeholder='Enter id of the task' />
       </div> <button type='submit'>Submit </button></>:<>
        <div> <label htmlFor="">Your Note</label>
        <input  type="text" defaultValue={todo.content} disabled  /></div>
         <div style={{margin:'15px'}}> <label htmlFor="">From Email</label>
        <input  type="email" defaultValue={todo.date} disabled/></div>
       </>
  }

     </form>

    </div>
      
    </>
  )
}

export default ViewTask
