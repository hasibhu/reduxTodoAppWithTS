import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"



function App() {


  return (
    <div>
      <Navbar></Navbar>
      {/* <h2 className="text-center mt-28">Homepage</h2> */}
     <Outlet></Outlet>
    </div>
  )
}

export default App
