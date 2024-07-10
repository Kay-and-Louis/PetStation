import React, { useState, useEffect } from 'react';

export default function Animals({animals, moreAnimalInfo, setMoreAnimalInfo, prices, setPrices, cartState, setCartState}){
    
    [cartState, setCartState]=useState({});

    function info(id){
        setMoreAnimalInfo(id);
    }

    const addToCart = (price, id) => {        
        setPrices([...prices, price]);
        setCartState(prevState => ({...prevState, [id]: (prevState[id] || 0) + 1}));
    }

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
            };
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
            <div className={`animal-format ${moreAnimalInfo ? 'opacity' : ''}` }>
                {animals.length > 0 ? animals.map((animal) => (
                    <div className='animal-model' key={animal.id}>
                        <img className='animal-image' src={animal.img} alt="Picture of animal" />                    
                        <p><span>Type: </span>{animal.type}</p>                    
                        <p><span>Sex: </span>{animal.sex}</p>
                        <p><span>Age: </span>{animal.age_in_months}</p>
                        <p className='healthScore'><span>Health Score: </span>{animal.health_score}</p>  
                        <p className='price'>£{animal.price}</p> 
                        <button className={`more-info ${moreAnimalInfo === animal.id ? 'selected' : ''}`} onClick={() => info(animal.id)}>More Info</button>                   
                        <button className='cart' onClick={() => addToCart(animal.price, animal.id)}>Add to Cart</button>
                        {
                            cartState[animal.id] ? (<button onClick={() => removeFromCart(animal.price, animal.id)}>Remove from Cart</button>) : ''
                        }
                        <div className='qty'>Qty: {cartState[animal.id] || 0}</div>  
                    </div>            
                )) 
                
                : 'loading animals' }           
                
                

                <div>
                    {moreAnimalInfo && (
                        <div className='info-box'>
                            <div className='info-content'>
                                <h2>More Information</h2>
                                <p>{animals.find(animal => animal.id === moreAnimalInfo)?.description}</p>
                                <button className='close-window' onClick={() => info(false)}>X</button>
                            </div>    
                        </div>
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
        
   
  


