import React from "react";

export default function ContactUs(){
    return (
        <div>

            <div>
                <div className="section">
                    <div>Contact Us</div>
                    <img src="https://cdn.pixabay.com/photo/2017/02/01/11/34/african-2029825_1280.png" alt="Mobile" />
                </div> 
                <div className="contact-text">
                    <div className="questions">
                        <h4>Got Any Questions?</h4>
                        <div className="details">
                            <img src="https://cdn.pixabay.com/photo/2013/07/13/10/30/icon-157358_1280.png" alt="phone" />
                            <div>012345678912</div>
                        </div>
                        <div className="details">
                            <img className="letter" src="https://cdn.pixabay.com/photo/2013/07/12/13/55/letter-147563_1280.png" alt="email" />
                            <div>pets@petstation.co.uk</div>
                        </div>
                    </div>
                    <div>
                        <div className="opening-hours">
                            <h4>Opening Hours</h4>
                            <p>Monday &#8211; Saturday: 9am &#8211;  5:30pm</p>
                            <p>Monday &#8211;  Saturday: 9am &#8211;  5:30pm</p>
                            <div className="location">
                                <img className="location-img" src="https://cdn.pixabay.com/photo/2024/02/10/11/17/location-8564579_1280.png" alt="location pin" />
                                <p>Pet Station, 64 Zoo Lane, Manchester, M1 4HG</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div> 
        </div>
    )
}