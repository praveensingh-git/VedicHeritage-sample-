import React from "react";
 const Footer = () => {
    return(
        <div className="flex flex-col gap-12">
            <div >
            <ul className="flex gap-6 font-lato text-gray-400">
                <li>
                    <a href="https://www.facebook.com/Vedicportal/" target="blank">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/srivanam_vedic_heritage/" target="blank">Instagram</a>

                </li>
                <li>
                    <a href="https://twitter.com/vedicignca?lang=en" target="blank">Twitter</a>
                </li>
            </ul>     
            <div className="flex gap-2 items-centre">
                <img className="object-cover h-10 w-10 rounder-3xl "  src="public/swastik.png" alt="profile logo  " />
                </div>
                <div  >
                    <p className="font-playfair font-thin"> Have any Question?</p>
                    <a className="font-lato font-medium text-gray-500" href="https://vedicheritage.gov.in/contact-us/" target="blank">Talk to Specialist</a>
                    </div>  
            </div>
        </div>
 
    )
 }

 export default Footer