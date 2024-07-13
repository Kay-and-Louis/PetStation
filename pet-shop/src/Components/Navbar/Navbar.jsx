import { useState } from "react";

export default function Navbar({setAnimals, originalAnimals, page, setPage}){

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(prevState => !prevState);
    }   
        
    const filterAnimals = (animalName) => {        
       const filteredList = originalAnimals.filter((animal) => {
            if (animalName === 'GoldFish || TropicalFish'){
                return animal.type === 'GoldFish' || animal.type === 'TropicalFish';
            } 
                return animal.type === animalName;
       });
       setAnimals(filteredList);
       setPage(0);
    };

    const allAnimals = () => {
        setAnimals(originalAnimals);
    }

    const pageSelect = (page) => {
        if (page === 0){
            setPage(0);
            setAnimals(originalAnimals);
        } else if (page === 1) {
            setPage(1);
        } else if (page === 2) {
            setPage(2);            
        } else {
            setPage(3);
        };
    }

    return(
        <div>
            <div className="title">
                <img src="data:image/jpeg;base64,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" alt="Cat and Dog" />
                <div className="title-header">Pet Station</div>
                
            </div>
            <div className="navbar"> 
                <div className="navbarOptions">
                    <div className="mainBtn" onClick={() => pageSelect(0)}>Home</div>
                    {page === 0 ?
                        <div className='animals-button' onClick={toggleOptions}>
                            Our Animals
                            {showOptions && (
                                <div className="animals-dropdown">
                                    <div onClick={() => filterAnimals('dog')}>Dogs</div>
                                    <div onClick={() => filterAnimals('cat')}>Cats</div>
                                    <div onClick={() => filterAnimals('hamster')}>Small Animals</div>
                                    <div onClick={() => filterAnimals('GoldFish || TropicalFish')}>Fishes</div>
                                    <div onClick={allAnimals}>All Animals</div>
                                </div>
                            )}

                        </div>
                        :
                        ''
                    }
                    <div className="mainBtn" onClick={() => pageSelect(1)}>About Us</div>
                    <div className="mainBtn" onClick={() => pageSelect(2)}>Contact Us</div>
                    <img onClick={() => pageSelect(3)}
                         src="https://cdn.pixabay.com/photo/2014/03/25/16/58/shopping-cart-297750_1280.png"
                         alt="shopping cart"/>
                </div>
            </div>
        </div>
    )
}