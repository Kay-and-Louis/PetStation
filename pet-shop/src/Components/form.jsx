import React, { useState } from "react";

export default function form(){
    const [input, setInput] = useState({});

    function handleChange(event){
        const{name, value} = event.target;
        setInput(values => ({...values, [name]: value}))
    }

    function submit(e){
        e.preventdefault();
    }

    return(
       <form>
            <label> Enter Animal here:
                <input 
                    type="text"
                    name="type"
                    onChange={handleChange} />
            </label>
            <label> Enter image here:
                <input 
                    type="text"
                    name="img"
                    onChange={handleChange} />
            </label>
            <label> Enter price here:
                <input 
                    type="number"
                    name="price"
                    onChange={handleChange} />
            </label>
            <label> Enter sex here:
                <input 
                    type="text"
                    name="sex"
                    onChange={handleChange} />
            </label>
            <label> Enter age in months here:
                <input 
                    type="number"
                    name="age_in_months"
                    onChange={handleChange} />
            </label>
            <label> Enter the healthscore here:
                <input 
                    type="number"
                    name="health_score"
                    onChange={handleChange} />
            </label>
            <label> Enter description here:
                <input 
                    type="text"
                    name="description"
                    onChange={handleChange} />
            </label>
            <label> Enter any additional information here:
                <input 
                    type="text"
                    name="additional_info"
                    onChange={handleChange} />
            </label>

            <button onClick={submit}>Submit</button>
       </form>
    )
}