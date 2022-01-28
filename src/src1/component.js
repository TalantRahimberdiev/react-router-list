
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import SubComponent from "./subComponent";
import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from "./data";

export default function Component() {
   const styles = [
      {
         active: {
            color: 'yellow',
            background: 'black'
         }
      },
      {
         active: {
            color: 'black'
         }
      }
   ]
   return (
      <>
         <nav className="d-flex justify-content-evenly flex-wrap border-bottom border-1 border-dark ">
            {
               data.map((item, index) => {
                  return (
                     <NavLink style={({ isActive }) => isActive ? styles[0].active : styles[1].active} className=" me-3 mt-2 font-monospace fs-4" key={index} to={`${item.name}`}>{item.name}</NavLink>
                  )
               })
            }
         </nav>
         <Routes>
            <Route path={':name/*'} element={<SubComponent data={data} />} />
         </Routes>
      </>
   )

}