import React, { useState } from "react";

export default function DropdownMenu({showDropDown}){  

    return(        
            <div className={`dropDownProfile ${showDropDown ? "dropDownProfileShow" : ""}`}>
                <ul>
                    <li>Dogs</li>
                    <li>Cats</li>
                    <li>Small Animals</li>
                    <li>Fishes</li>
                </ul>
            </div>        
    )
}