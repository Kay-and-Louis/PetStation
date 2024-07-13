import React from 'react';

export default function Animals({animals, moreAnimalInfo, setMoreAnimalInfo, prices, setPrices}){
      
    function info(id){
        setMoreAnimalInfo(id);
    }

    const addToCart = (price) => {        
        setPrices([...prices, price]);
    }

    const removeFromCart = (price) =>{
        const index = prices.indexOf(price);
        if(index > -1){
            const updatedArray = [...prices];
            updatedArray.splice(index, 1);
            return setPrices(updatedArray);
        }        
    }
    
    const totalPrice = () => {
        return prices.reduce((acc, total) => {
            return acc + total}, 0);           
    };

   const quantity = (price) => {
        const amount = prices.filter((element) => element === price).length;
        return amount;
   }
      
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
                        <button className='cart' onClick={() => addToCart(animal.price)}>Add to Cart</button>
                        <button onClick={() => removeFromCart(animal.price)}>Remove from Cart</button> 
                        <div className='qty'>Qty: {quantity(animal.price)}</div>  
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
        
   
  


