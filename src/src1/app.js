
import React from "react";
import MainComponent from "./mainComponent";
import { BrowserRouter } from "react-router-dom";

export default function App() {
   return (
      <BrowserRouter>
         <MainComponent />
      </BrowserRouter>
   )
}