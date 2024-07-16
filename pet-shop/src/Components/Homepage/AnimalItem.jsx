import React from "react";

export default function AnimalItem({animal, cartState, info, addToCart, moreAnimalInfo, removeFromCart}){
    return(
        <div className='animal-model' key={animal.id}>
                        <img className='animal-image' src={animal.img} alt="Picture of animal" />                    
                        <p><span>Type: </span>{animal.type}</p>                    
                        <p><span>Sex: </span>{animal.sex}</p>
                        <p><span>Age: </span>{animal.age_in_months}</p>
                        <p className='healthScore'><span>Health Score: </span>{animal.health_score}</p>  
                        <p className='price'>£{animal.price}</p> 
                        <button className={`more-info ${moreAnimalInfo === animal.id ? 'selected' : ''}`} onClick={() => info(animal.id)}>More Info</button>                   
                        <button className={`cart ${(cartState[animal.id] ?? 0) > 2 ? 'freeze' : ''}`} onClick={() => addToCart(animal.price, animal.id)} disabled={(cartState[animal.id] ?? 0) > 2}>Add to Cart</button>
                        {
                            cartState[animal.id] ? (<button onClick={() => removeFromCart(animal.price, animal.id)}>Remove from Cart</button>) : ''
                        }
                        <div className='qty'>Qty: {cartState[animal.id] || 0}</div>  
                    </div>  
    )
}