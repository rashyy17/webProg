import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import "./loader.css";
import { useNavigate } from "react-router-dom";
function F(){
    let [load,set_load] = useState(1);
    let [initial,set_initial] = useState({});

    let n = useNavigate();

    

    useEffect(()=>{

        async function t(){

            let op = await fetch('http://localhost:8000/all_rent_properties',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                }
            );

            let ans = await op.json();

            console.log(ans);

            set_initial(ans.properties);
            set_load(0);



        }
        t();
        
    },[]);

    if(load == 1){
        return (
            <div>
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }


    let move_to_maps = (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        let iipl = initial[opl];

        const googleMapsUrl = `https://www.google.com/maps?q=${iipl.lat},${iipl.long}`;
        window.open(googleMapsUrl, "_blank");

    }


    return (
        <div>
            
            <button onClick={()=>{
                n('/rpf');
            }}>rent properties</button>
            <button onClick={()=>{
                n('/spf');
            }}>buy properties</button>
            <button>rent commercial plots</button>
            <button>buy commercial plots</button>
            <button>rent commercial workspace</button>
            <button>buy commercial workspace</button>
            <button>rent residential plots</button>
            <button>buy commercial plots</button>
            <button>residential projects</button>

           

            {
                initial.map((key,index)=>{
                    return (
                        <div key={index}>

                            <p>address is</p>
                            <p>{key.addresstrivia}</p>
                            <p>area size</p>
                            <p>{key.areaSize}</p>

                            <p>total amount</p>
                            <p>{key.totalAmount}</p>

                            <button accessKey={index} onClick={move_to_maps}>go to location</button>

                            

                        </div>
                        
                    );
                })

            }



            

            
            
        </div>
    );
}

export default F;