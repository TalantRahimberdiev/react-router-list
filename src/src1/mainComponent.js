
import { Link, Routes, Route } from "react-router-dom"
import Component from "./component"
import './main.css'

export default function MainComponent() {
   return (
      <div>
         <Link className="d-block text-center fs-3 text-black font-monospace" to={'roadmap'}>ROADMAP with react-router.</Link>
         <Routes>
            <Route path='roadmap/*' element={<Component />} />
         </Routes>
      </div >
   )
}