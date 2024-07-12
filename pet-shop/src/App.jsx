import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Animals from "./Components/Animals";
import TotalPrice from './Components/TotalPrice';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Checkout from "./Components/Checkout";

export default function App(){

  const [animals, setAnimals] = useState([]) ;
  const [originalAnimals, setOriginalAnimals] = useState([]);
  const [moreAnimalInfo, setMoreAnimalInfo] = useState(false);
  const [page, setPage] = useState(0);
  const [prices, setPrices] = useState([0]);  
  const [removeBtn, setRemoveBtn] = useState(false);
  const [cartState, setCartState]=useState({});
  const [qtyFreeze, setQtyFreeze] = useState(false);

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
      {page === 0 ? (
        <div>
          <Navbar 
            animals = {animals}
            setAnimals = {setAnimals}
            originalAnimals = {originalAnimals}
            page ={page}
            setPage = {setPage}
          />      
          <Animals
            animals = {animals}
            moreAnimalInfo = {moreAnimalInfo}
            setMoreAnimalInfo = {setMoreAnimalInfo}
            setPage={setPage}
            prices={prices}
            setPrices={setPrices}
            removeBtn={removeBtn}
            setRemoveBtn={setRemoveBtn}
            cartState={cartState}
            setCartState={setCartState}
            qtyFreeze={qtyFreeze}
            setQtyFreeze={setQtyFreeze}
          />
          <TotalPrice />  
        </div>) : 
      page === 1 ? (
        <div> 
          <AboutUs
            setPage={setPage}
          /> 
        </div>) : 
      page === 2 ? (
        <div>
           <ContactUs
            setPage={setPage}
          /> 
        </div>) : 
      page === 3 ? (
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