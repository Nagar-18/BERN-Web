import React, { useState } from 'react'
import Navigation from './Navigation';

const CreateTask = ({state}) => {
     const [content,setContent]=useState('');
     const [email,setEmail]=useState('');

    const handleSubmit=async(e)=>{
         e.preventDefault();
         const {web3,contract,account}=state;
      console.log(state);
        try {
            const res=await fetch(`https://bern-todo.vercel.app/etherum/api/create-task`,{
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({email:email})  
                
            })
            const data= await res.json();
            // console.log(data)
            if(data.status===200)
            {
               try {
                   const res=contract.methods.createTask(content,email).send({from:account});
                   console.log(res);
                   if(res)
                   alert("created Succesfully")
               } catch (error) {
                 alert(error.message);
               }
            }
            else{
                alert("Email is already Present")
            }
        
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <> <Navigation/>
    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
       
     <form onSubmit={handleSubmit} style={{height:'50vh', width:'65vw',alignContent:'center',padding:'4vh 4vh',border:' 2px solid white'}}>
       <h2>Create Your Note Here</h2>
        <div> <label htmlFor="">Your Note</label>
        <input onChange={(e)=>setContent(e.target.value)} type="text" placeholder='Enter Your note here' /></div>
         <div style={{margin:'15px'}}> <label htmlFor="">Your Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email here' /></div>
       <button onSubmit={handleSubmit} >Create</button>

     </form>

    </div>
    </>
  )
}

export default CreateTask
