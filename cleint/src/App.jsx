import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Wallet from './pages/Wallet'

import Update from './pages/Update'
import Delete from './pages/Delete'
import ViewTask from './pages/ViewTask'
import ViewAllTask from './pages/ViewAllTask'
import Navigation from './pages/Navigation'
import CreateTask from './pages/CreateTask'
 

function App() {
  const [state, setState] = useState({web3:null,contract:null,account:null})

  const saveState=(web3,contract,account)=>{
    console.log(account)
    setState({web3,contract,account});

  }
  const router=createBrowserRouter([
    

  {path:'/',element:<Wallet  saveState={saveState} />},
   {path:'/create-task',element:<CreateTask state={state}/>},
    {path:'/update-task',element:<Update state={state}/>},
     {path:'/delete-task',element:<Delete state={state}/>},
      {path:'/view-task',element:<ViewTask/>},
       {path:'/view-alltask',element:<ViewAllTask/>},
        {path:'/navigation',element:<Navigation/>},
])
  

  return (
    <>
    
     <RouterProvider router={router}><Navigation/>
      </RouterProvider>
    </>
  )
}

export default App;
