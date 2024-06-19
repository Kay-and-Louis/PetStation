import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Animals from "./Components/Animals";
import TotalPrice from './Components/TotalPrice';

export default function App(){

  const [animals, setAnimals] = useState([]) ;
  const [originalAnimals, setOriginalAnimals] = useState([]);

  

  return (
    <div>
      <Navbar 
        animals = {animals}
        setAnimals = {setAnimals}
        originalAnimals = {originalAnimals}
      />
      <TotalPrice />  
      <Animals 
        animals = {animals}
        setAnimals = {setAnimals}
        originalAnimals = {originalAnimals}
        setOriginalAnimals = {setOriginalAnimals}
      />
    </div>
  )
}