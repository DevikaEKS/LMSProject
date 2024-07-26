import React from "react";
import './Footer.css'
export function Footer(){
    const currentYear = new Date().getFullYear();
    return(
       
            <div className="container-fluid bgcolourfooter py-3" id="footer">         
                <p className="text-center">Copyright © {currentYear}  KGGL. All Right Reserved.</p>
           </div>    
    );
}

