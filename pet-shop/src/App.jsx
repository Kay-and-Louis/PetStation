import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Animals from "./Components/Animals";
import TotalPrice from "./Components/TotalPrice";


export default function App(){
  return (
    <div>
      <Navbar />  
      <TotalPrice />    
      <Animals />      
    </div>
  )
}