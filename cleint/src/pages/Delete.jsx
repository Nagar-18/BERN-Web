import React, { useRef } from 'react'
import Navigation from './Navigation'

const Delete = ({state}) => {

   const idRef=useRef();
   const {web3,contract,account}=state;
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
         try {
           
         const res=contract.methods.deleteTask(idRef.current.value).send({from:account});

                   console.log(content);
                   if(res)
                  {
                     alert("Deleted Succesfully");
                      setflag(true);
                      setTodo({})
                  }
               } catch (error) {
                 alert("connect to wallet first");
               }

    }
  return (
    <div>
       <Navigation/>
     <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
       
     <form onSubmit={handleOnSubmit} style={{height:'40vh', width:'40vw',alignContent:'center',padding:'4vh 4vh',border:' 2px solid white'}}>
       <h2>Update Your Note Here</h2>
      <div style={{margin:'8px'}}> <input ref={idRef} type="text" placeholder='Enter id of the task' />
       </div> <button type='submit'>Delete </button>
     </form>
     </div>
    </div>
  )
}

export default Delete
