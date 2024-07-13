import React from "react";
import NavbarOtherPages from "./Navbar/NavbarOtherPages";
import AnimalSummary from "./AnimalSummary.jsx";

export default function Checkout({animals, setAnimals, setPage, prices, cartState}){

    const totalPrice = () => {
        return prices.reduce((acc, total) => {
            return acc + total}, 0);           
    };

    return (
        <>
            <NavbarOtherPages
                setPage = {setPage}
                setAnimals = {setAnimals}
            />

            <div className="checkout-layout">
                <div>SUBTOTAL</div>
                <div>£{totalPrice()}</div>
                {Object.keys(cartState).length > 0 ?
                    <div>
                        Items in cart:
                        {Object.keys(cartState).map((animalId) => {
                            return <AnimalSummary animalId={animalId} animals={animals} quantity={cartState[animalId]}></AnimalSummary>
                        })}
                    </div>
                    :
                    ''
                }
                <div>Delivery: <b>Collection Only!</b></div>
                <img src="https://cdn.pixabay.com/photo/2021/12/29/11/52/thank-you-6901463_1280.png" alt="Thank you" />
            </div>
        </>
    )
}