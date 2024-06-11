export default function DropdownMenu({showDropDown, animals, setAnimals, orignalAnimals}){

    const filterDogs = () => {
            const dogsOnly = animals.filter((animal) => {
            return animal.type === 'dog';            
        })
        setAnimals(dogsOnly);
    }

    const filterCats = () => {
        const catsOnly = animals.filter((animal) => {
            return animal.type === 'cat';
        })
        setAnimals(catsOnly);
    }
    const filterSmallAnimals = () => {
        const smallAnimalsOnly = animals.filter((animal) => {
            return animal.type === 'hamster';
        })
        setAnimals(smallAnimalsOnly);
    }
    const filterFish = () => {
        const fishOnly = animals.filter((animal) => {
            return animal.type === 'GoldFish' || animal.type === 'TropicalFish';
        })
        setAnimals(fishOnly);
    }

    /* 
        function allAnimals(){
            setAnimals(orignalAnimals)
        }
    */

    return(        
            <div className={`dropDownProfile ${showDropDown ? "dropDownProfileShow" : ""}`}>
                <ul>
                    <li onClick={filterDogs}>Dogs</li>
                    <li onClick={filterCats}>Cats</li>
                    <li onClick={filterSmallAnimals}>Small Animals</li>
                    <li onClick={filterFish}>Fishes</li>
                </ul>
            </div>        
    )
}