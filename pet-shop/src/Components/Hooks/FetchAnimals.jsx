import React, { useEffect, useState } from "react";

export default function FetchAnimals(){

    const [animals, setAnimals] = useState([]) ;
    const [originalAnimals, setOriginalAnimals] = useState([]); 
    
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

    return {animals, originalAnimals, setAnimals};
}