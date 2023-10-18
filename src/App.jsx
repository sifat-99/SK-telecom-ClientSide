
import { Outlet } from 'react-router-dom'
import Navbar from './Components/AllPages/Navbar/Navbar'


function App() {


  return (
    <div>
      {/* <h1>Hello</h1> */}
         <Navbar></Navbar>
          <Outlet></Outlet>
    </div>
  )
}

export default App
