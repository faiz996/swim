import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

function BackToTop() {

    const [show,setShow]=useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){
                setShow(true);
            }else{
                setShow(false);
            }

        });

    },[]);

    return(

        show &&

        <button
        className="top-btn"
        onClick={()=>window.scrollTo({
            top:0,
            behavior:"smooth"
        })}
        >
            <FaArrowUp/>
        </button>

    )

}

export default BackToTop;