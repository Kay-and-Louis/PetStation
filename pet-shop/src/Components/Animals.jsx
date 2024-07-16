import React, { useState } from 'react';
import AnimalItem from './Homepage/AnimalItem';
import Moreinfo from './Homepage/MoreInfo';

export default function Animals({animals, prices, setPrices, cartState, setCartState}){

const [moreAnimalInfo, setMoreAnimalInfo] = useState(false);
    
    function info(id){
        setMoreAnimalInfo(id);
    }

    const addToCart = (price, id) => {
        if ((cartState[id] ?? 0) > 2) {
            return;
        }

        setCartState(prevState => {
            const currentQty = prevState[id] || 0;
            let updatedQty = currentQty + 1;
            setPrices([...prices, price]);
            return {...prevState, [id]: updatedQty};
        });
    };

    const removeFromCart = (price, id) =>{
        const index = prices.indexOf(price);
        if(index > -1){
            const updatedArray = [...prices];
            updatedArray.splice(index, 1);
            setPrices(updatedArray);
        
            setCartState(prevState => {
            const newState = {...prevState};
            if(newState[id] > 1){
                newState[id] -= 1;
            } else {
                delete newState[id]; 
            }
            return newState;
        });
    }
  };
    
    const totalPrice = () => {
        return prices.reduce((acc, total) => {
            return acc + total}, 0);           
    };
      
    return (
        <div className='pageLayout'>
            <div className={`animal-format ${moreAnimalInfo ? 'opacity' : ''}`}>
                {animals.length > 0 ? animals.map((animal) => (
                    <AnimalItem 
                        animal={animal} 
                        moreAnimalInfo={moreAnimalInfo}
                        cartState={cartState}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                        info={info}
                    />
                )) : 'loading animals'}           
                
                <div>
                    {moreAnimalInfo && (
                        <Moreinfo 
                            animals={animals}
                            moreAnimalInfo={moreAnimalInfo}
                            info={info}
                        />
                    )}
                </div>             
            </div>

            <div className='totalPrice'>
                <h3>Subtotal</h3>
                <p>£{totalPrice()}.00</p>                
            </div> 
        </div>      
    )
};
        
   
  


