import React from "react";
import Navbar from "./Navbar/Navbar";

export default function Checkout({animals, setAnimals, originalAnimals, page, setPage, prices}){

    const totalPrice = () => {
        return prices.reduce((acc, total) => {
            return acc + total}, 0);           
    };

    return (
        <>
            <Navbar
                animals = {animals}
                setAnimals = {setAnimals}
                originalAnimals = {originalAnimals}
                page ={page}
                setPage = {setPage}
            /> 

            <div className="checkout-layout">
                <div>SUBTOTAL</div>
                <div>£{totalPrice()}</div>
                <div>Delivery: <b>Collection Only!</b></div>
                <img src="https://cdn.pixabay.com/photo/2021/12/29/11/52/thank-you-6901463_1280.png" alt="Thank you" />
            </div>
        </>
    )
}