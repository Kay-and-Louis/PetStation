import React from "react";

export default function Moreinfo({animals, moreAnimalInfo, info}){
    return(
        <div className='info-box'>
            <div className='info-content'>
                <h2>More Information</h2>
                <p>{animals.find(animal => animal.id === moreAnimalInfo)?.description}</p>
                <button className='close-window' onClick={() => info(false)}>X</button>
            </div>    
        </div>
    )
}