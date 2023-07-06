import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/AcornsR.png";
import {LuSearch, } from 'react-icons/lu';

import { useState , useRef} from "react"; 

export const Header = () =>{

     const [input, setInput] = useState(false);
     const searchRef = useRef();
     const contRef = useRef();

     const handleSearch = () =>{
          if(!input){
               setInput(true);
               contRef.current.style.width="250px";
               searchRef.current.style.display = "flex";

          }else{
               console.log("Searching");
               setInput(false);
               contRef.current.style.width="30px";
               searchRef.current.value = "";
               searchRef.current.style.display = "none";
          }
     }
     return(
          <div className="header">
               <div className="col col-1">
                    <div className="logoContainer">
                         <img src={Logo} alt="Company logo"  />
                         <h1>Acorns Consultancy</h1>
                    </div>
                    <div className="nav">
                         <NavLink>About</NavLink>
                         <NavLink>Services</NavLink>
                         <NavLink>Works</NavLink>
                    </div>
               </div>
               <div className="col col-2">
                    <button>Contact</button>
                    <div className="search" ref={contRef}>
                         <input ref={searchRef} type="text" placeholder="Search" />
                         <span onClick={handleSearch}><LuSearch /></span>
                    </div>
               </div>
          </div>
     )
}


export const Slider = ({children}) => {
     return(
          <div className="SlideContainer">
               {children}
          </div>
     )
}

export const Slide = ({children }) => {
     return(
          <div className="Slide">{children}</div>
     )
}

export const Footer = () => {
     return(
          <div className="footer">
               <p>&copy; 2023 Acorns Consultancy, All rights </p>
          </div>
     )
}

