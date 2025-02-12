import React from "react";
import { useState } from "react";
import "./loader.css";
function M_rent_commercial_workspace(){

    let [load,set_load] = useState(0);

    /*let [state,set_state] = useState("");
    let [city,set_city] = useState("");

    let [pincode,set_pincode] = useState("");

    let [min,set_min] = useState("");*/

    let [max,set_max] = useState("");

    let [filtered_data,set_filtered_data] = useState([]);

    let [url,set_url] = useState("");

    

    let filter = async()=>{
        set_load(1);
        const requestData = {
            address: url,
            range: parseFloat(max),
        };

        let op = await fetch('http://localhost:8000/filter_commercial_workspace_rent_properties',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(requestData),
                
            }
        );

        let ans = await op.json();
        console.log(ans.nearbyprop);
        set_filtered_data([...ans.nearbyprop]);
        set_load(0);
    }

    let move_to_maps_p = (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        let iipl = filtered_data[opl];

        const googleMapsUrl = `https://www.google.com/maps?q=${iipl.lat},${iipl.long}`;
        window.open(googleMapsUrl, "_blank");

    }

    if(load == 1){
        return (
            <div>
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }


    return (
        <div>

                <input type="text" value={url} onChange={(e)=>{
                    set_url(e.target.value);
                }} placeholder="url" />

                

                    <input type="text" value={max} onChange={(e)=>{
                        set_max(e.target.value);
                    }} placeholder="range" />

                <button onClick={filter}>filter</button>


                {
                filtered_data.map((key,index)=>{
                    return (
                        <div key={index}>

                            <p>address is</p>
                            <p>{key.addresstrivia}</p>
                            <p>area size</p>
                            <p>{key.areaSize}</p>

                            <p>total amount</p>
                            <p>{key.totalAmount}</p>

                            <button accessKey={index} onClick={move_to_maps_p}>go to location</button>

                            

                        </div>
                        
                    );
                })

            }

        </div>
    );

}

export default M_rent_commercial_workspace;