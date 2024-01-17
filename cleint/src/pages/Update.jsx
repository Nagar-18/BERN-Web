import React, { useEffect,  useState } from 'react'
import Navigation from './Navigation';
const Update = ({state}) => {

   const [content,setContent]=useState('');
     const [email,setEmail]=useState('');
     const [id,setId]=useState(0);
    const [todo,setTodo]=useState({});
  const [flag,setflag]=useState(true);

  // const handleOnSubmit=()=>{};
  // const updateOnSubmit=()=>{}

    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        
     
        try {
            const res=await fetch(`https://bern-todo.vercel.app/etherum/api/view-task/${id}`,{
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

    const updateOnSubmit=(e)=>{
      e.preventDefault();
   const {web3,contract,account}=state;
   
  try {
   
                   const res=contract.methods.updateTask(id,content,email).send({from:account});

                   console.log(content);
                   if(res)
                  {
                     alert("updated Succesfully");
                      setflag(true);
                      setTodo({})
                  }
               } catch (error) {
                 alert("connect to wallet first");
               }

 }
  
    useEffect(()=>{setEmail(todo.date)},[todo]);


          
  
        
    
  return (
    <>
       <Navigation/>
        
     {flag?<>
     <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <form onSubmit={handleOnSubmit} style={{height:'40vh', width:'40vw',alignContent:'center',padding:'4vh 4vh',border:' 2px solid white'}}>
         <h2>Update Your Note Here</h2>
       <div style={{margin:'8px'}}><input onChange={(e)=>setId(e.target.value)} type="text" placeholder='Enter id of the task' /></div>
        <button type='submit'>Submit </button>

        </form></div></>
        : <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
       
     <form onSubmit={updateOnSubmit} style={{height:'40vh', width:'40vw',alignContent:'center',padding:'4vh 4vh',border:' 2px solid white'}}>
       <h2>Update Your Note Here</h2>
       <>
        <div> <label htmlFor="">Your Note</label>
        <input  type="text" defaultValue={todo.content} onChange={(e)=>setContent(e.target.value)}  /></div>
         <div style={{margin:'15px'}}> <label htmlFor="">From Email</label>
        <input  type="email"   value={todo.date} /></div>
        <button type='submit'>Update </button>
       </>
  

     </form>

    </div> }
   
    </>
  )
}

export default Update;
