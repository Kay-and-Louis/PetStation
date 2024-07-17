import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Animals from "./Components/Animals";
import TotalPrice from './Components/TotalPrice';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Checkout from "./Components/Checkout";
import FetchAnimals from "./Components/Hooks/FetchAnimals";
import AppProvider, {useAppContext} from "./Components/AppContext";

export default function App(){
  const {animals, setAnimals, originalAnimals} = FetchAnimals();

  return (
    <AppProvider>
      <AppContent
        animals = {animals}
        setAnimals = {setAnimals}
        originalAnimals = {originalAnimals}
      />
    </AppProvider>
  )
}

function AppContent({animals, setAnimals, originalAnimals}){
  const {page} = useAppContext();

return(
  <div>
      <Navbar
          animals = {animals}
          setAnimals = {setAnimals}
          originalAnimals = {originalAnimals}            
      />
      {page === 'home' ? (
      <div>
        <Animals
          animals = {animals}          
        />
        <TotalPrice />  
      </div>) : 
      page === 'aboutUs' ? (
      <div> 
        <AboutUs          
        /> 
      </div>) : 
      page === 'contactUs' ? (
      <div>
         <ContactUs          
        /> 
      </div>) : 
      page === 'checkout' ? (
      <div>
        <Checkout    
          animals={animals}       
        />
      </div>
    ) : ''}      
  </div>
  )
}