import React from "react";
import { useNavigate } from "react-router-dom";


function S(){
    let n = useNavigate();

    return (
        <div>
            <button onClick={()=>{
                n('/rent');

            }}>RENT PROPERTIES</button>

        </div>
    );
}

export default S;