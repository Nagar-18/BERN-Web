import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

const ViewAllTask = () => {

const [notes,setNotes]=useState([]);
    useEffect(()=>{
        
       const getData=async()=>{
      
        try {
            const res=await fetch(`https://bern-todo.vercel.app/etherum/api/all-task`,{
                method:'GET',
                headers:{
                    "content-type":"application/json"
                }
            })
            const data= await res.json();
            console.log(data)
            if(data.status===200)
            {
                setNotes(data.TaskList)
            }
        
        } catch (error) {
            console.log(error)
        }

    }
    getData();
    },[])
     console.log(notes)
  return (
    <>

       <Navigation/>
     
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
       
     <div  style={{height:'40vh', width:'40vw',alignContent:'center',padding:'4vh 4vh',border:' 2px solid white'}}>
       <h2>Notes Created till Now</h2>
        { 

          notes.length!==0?
         
            notes.map((note,key)=>{
                 return note.content.length>0? <><div style={{marginBottom:'5px'}}><input value={note.content} type="text" placeholder='Enter Your note here' />
         <span style={{margin:'5px'}} >Wrote By</span>
        <input value={note.date} type="email" placeholder='Enter Your Email here' /></div></>:null
            })
          
          
        
      :<>No Items to Preview</>
        }

     </div>

    </div>
    </>
  )
}

export default ViewAllTask
