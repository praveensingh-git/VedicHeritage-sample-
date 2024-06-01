import React from "react";
 const Body = () => {
    return(
        <div class=" pt-0">
            <div className="pb-5 pt-0 space-y-4">
            <img className="rounded-md" src="public/vedas-transformed.jpeg" alt="Vedas img" />
            
        </div>
        <div>
            <h1 className="text-5xl font-bold font-playfair leading-tight">Explore more on Vedic Heritage</h1>
            <p className="font-lato text-gray-400">A Veda is a collection of poems or hymns composed in archaic Sanskrit by Indo-European-speaking peoples who lived in northwest India during the 2nd millennium BCE.</p>
            <form action=""className="flex flex-col gap-4">
                <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter Email Address"  />
                <button className="rounded-md px-4 py-4 bg-blue-500 text-white ">Join to Know More</button>
            </form>
            <div className="flex gap-2 py-2">
                <img src="check-mark-svgrepo-com.svg" alt="chekmark" className="object-cover h-4 w-4  " />
                <p className="font-lato text-gray-400">No Spam, Unsubscribe anytime</p>
            </div>
        </div>
        </div>

    )
 }

 export default Body