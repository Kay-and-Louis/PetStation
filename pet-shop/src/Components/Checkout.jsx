import React from "react";

export default function Checkout({prices}){

    const totalPrice = () => {
        return prices.reduce((acc, total) => {
            return acc + total}, 0);           
    };

    return (
        <>
            <div className="checkout-layout">
                <div>SUBTOTAL</div>
                <div>£{totalPrice()}</div>
                <div>Delivery: <b>Collection Only!</b></div>
                <img src="https://cdn.pixabay.com/photo/2021/12/29/11/52/thank-you-6901463_1280.png" alt="Thank you" />
            </div>
        </>
    )
}