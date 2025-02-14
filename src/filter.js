import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import "./loader.css";
import { useNavigate } from "react-router-dom";

function F(){
    let [load,set_load] = useState(1);
    let [initial,set_initial] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    let open_pop_up = ()=>{
        setShowPopup(true);
    }

    let close_pop_up = ()=>{
        setShowPopup(false);
    }

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
            <button onClick={()=>{
                n('/sell_commercial_plots_filter');
            }}>buy commercial plots</button>
            
            
            <button onClick={()=>{
                n('/rent_commercial_plots_filter');
            }}>rent commercial plots</button>
            <button onClick={()=>{
                n('/rent_residential_plots_filter');
            }}>rent residential plots</button>
            <button  onClick={()=>{
                n('/sell_residential_plots_filter');
            }}>buy residential plots</button>
            <button onClick={()=>{
                n('/sell_commercial_workspace_filter');
            }}>buy commercial workspace</button>
            <button onClick={()=>{
                n('/rent_commercial_workspace_filter');
            }}>rent commercial workspace</button>
            
            <button>residential projects</button>

           

            {
                initial.length === 0 ? (
                    <p>No data available</p>
                ):(initial.map((key,index)=>{
                    return (
                        <div key={index}>

                            <p>address is</p>
                            <p>{key.addresstrivia}</p>
                            <p>area size</p>
                            <p>{key.areaSize}</p>

                            <p>total amount</p>
                            <p>{key.totalAmount}</p>

                            <button accessKey={index} onClick={move_to_maps}>go to location</button>

                            <button onClick={open_pop_up}>Contact Builder </button>

                            {showPopup && (
                <div style={{
                    position: "fixed", 
                    bottom: "20px", 
                    right: "20px", 
                    background: "black", 
                    color: "white", 
                    padding: "10px", 
                    borderRadius: "5px"
                }}>
                    PLEASE SUBSCRIBE TO PRMIUM TO AVAIL THIS FEATURE

                    <button onClick={close_pop_up}>CLOSE</button>
                </div>
            )}

                            

                        </div>
                        
                    );
                }))

            }



            

            
            
        </div>
    );
}

export default F;