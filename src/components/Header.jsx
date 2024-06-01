import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
const Header = () => {
    return (
        <div className="flex justify-between py-5">
            <div className="flex items-center justify-center gap-4">
                <img class="object-cover h-20 w-30  bg-gradient-to-r from bg-amber-50 to-bg-amber-50" src="public/logo-removebg-preview.png" alt="Logo"  />
               <a href="https://www.onlineved.com/" target="blank"><button className="bg-gradient-to-r from-orange-400 to-red-400 text-xm text-white px-2.5 py-1.5 rounded-2xl">Return to vedas</button>
            </a>
            </div>
            <div class>
                <FaBarsProgress />
            </div>
        </div>

    )
}

export default Header