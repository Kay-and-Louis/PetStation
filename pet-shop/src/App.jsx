import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Animals from "./Components/Animals";
import TotalPrice from './Components/TotalPrice';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Checkout from "./Components/Checkout";
import FetchAnimals from "./Components/Hooks/FetchAnimals";

export default function App(){
  const [page, setPage] = useState('home');
  const [prices, setPrices] = useState([]);
  const [cartState, setCartState]=useState({});
  const {animals, setAnimals, originalAnimals} = FetchAnimals();

  return (
    <div>
        <Navbar
            animals = {animals}
            setAnimals = {setAnimals}
            originalAnimals = {originalAnimals}
            page ={page}
            setPage = {setPage}
        />
        {page === 'home' ? (
        <div>
          <Animals
            animals = {animals}
            setPage={setPage}
            prices={prices}
            setPrices={setPrices}
            cartState={cartState}
            setCartState={setCartState}
          />
          <TotalPrice />  
        </div>) : 
      page === 'aboutUs' ? (
        <div> 
          <AboutUs
            setPage={setPage}
          /> 
        </div>) : 
      page === 'contactUs' ? (
        <div>
           <ContactUs
            setPage={setPage}
          /> 
        </div>) : 
      page === 'checkout' ? (
        <div>
          <Checkout
            setPage={setPage}
            prices={prices}
            cartState={cartState}     
            animals={animals}       
          />
        </div>
      ) : ''}      
    </div>
  )
}