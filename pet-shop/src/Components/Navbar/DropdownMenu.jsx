export default function DropdownMenu({showDropDown, setAnimals, originalAnimals}){

    const allAnimals = () => {
        setAnimals(originalAnimals);
    }
        

    const filterAnimals = (animalName) => {        
       const filteredList = originalAnimals.filter((animal) => {
            if (animalName === 'GoldFish || TropicalFish'){
                return animal.type === 'GoldFish' || animal.type === 'TropicalFish';
            } 
                return animal.type === animalName;
       })
       setAnimals(filteredList);
   }

    return(        
            <div className={`dropDownProfile ${showDropDown ? "dropDownProfileShow" : ""}`}>
                <ul>
                    <li onClick={() => filterAnimals('dog')}>Dogs</li>
                    <li onClick={() => filterAnimals('cat')}>Cats</li>
                    <li onClick={() => filterAnimals('hamster')}>Small Animals</li>
                    <li onClick={() => filterAnimals('GoldFish || TropicalFish')}>Fishes</li>
                    <li onClick={allAnimals}>All Animals</li>
                </ul>
            </div>        
    )
}