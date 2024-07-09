import React from "react";
import NavbarOtherPages from "./Navbar/NavbarOtherPages";

export default function AboutUs({setAnimals, setPage}){
    return (
        <div>
            <NavbarOtherPages
                setPage = {setPage}
                setAnimals = {setAnimals}
            />
            
            <div className="section">
                <div>About Us</div>
                <img src="https://cdn.pixabay.com/photo/2017/01/31/08/46/anthropomorphized-animals-2023331_1280.png" alt="Monkey" />
            </div> 
            <div className="about-text">
                <h2>The world famous Pet Station!</h2>
                <p>World-renowned, this pet store is celebrated for offering the best animals in the world. Known for its exceptional quality and diverse selection, the store provides everything from exotic pets to beloved household companions. Expert staff ensure each animal is well cared for, matching families with the perfect pets. Their commitment to health, happiness, and customer satisfaction sets them apart, attracting pet lovers globally. The store's ethical practices and extensive knowledge make it a trusted destination for pet enthusiasts. Whether seeking a rare species or a loyal friend, customers find unparalleled excellence and service here.</p>
            </div>
        </div>
    )
}