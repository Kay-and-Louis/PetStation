import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Animals from "./Components/Animals";
import TotalPrice from './Components/TotalPrice';

export default function App(){

  const [animals, setAnimals] = useState([]) ;
  const [originalAnimals, setOriginalAnimals] = useState([]);
  const [moreAnimalInfo, setMoreAnimalInfo] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/api/fetch')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAnimals(data.result);
                setOriginalAnimals(data.result);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);    
    
  return (
    <div>
      <Navbar 
        animals = {animals}
        setAnimals = {setAnimals}
        originalAnimals = {originalAnimals}
      />      
      <Animals
        animals = {animals}
        moreAnimalInfo = {moreAnimalInfo}
        setMoreAnimalInfo = {setMoreAnimalInfo}
      />
      <TotalPrice />  
    </div>
  )
}