import React from "react";
import { useState } from "react";
import Rating from '@mui/material/Rating';
import "./loader.css";
function M_sale_residential_plots(){

    let [load,set_load] = useState(0);

    /*let [state,set_state] = useState("");
    let [city,set_city] = useState("");

    let [pincode,set_pincode] = useState("");

    let [min,set_min] = useState("");*/

    let [max,set_max] = useState("");

    let [filtered_data,set_filtered_data] = useState([]);

    let [url,set_url] = useState("");


    const [showPopup, setShowPopup] = useState(false);

    let open_pop_up = ()=>{
        setShowPopup(true);
    }

    let close_pop_up = ()=>{
        setShowPopup(false);
    }

    let [current_rating_state,set_current_rating_state] = useState(null);
    //rating state values
    const [rating, setRating] = useState(0); // Store rating value


    const handleRatingChange = (event, newValue) => {
        setRating(newValue); // Update rating when changed
    };

    let submit_ratings_filetred = async ()=>{
        set_load(1);
        let iip = filtered_data[current_rating_state];
        console.log(iip);

        let op = await fetch('http://localhost:8000/rate_property',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({a:iip,rt:rating,c:"sale_residential_plots_rating"}),
                
            }
        );

        let ans = await op.json();

        if(ans.message  == "successful"){
            set_load(2);
            setRating(0);
        }

    }

    let ratebox_filtered = (e)=>{
        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        set_current_rating_state(opl);

        set_load(5);

    }

    

    let filter = async()=>{
        set_load(1);
        const requestData = {
            address: url,
            range: parseFloat(max),
        };

        let op = await fetch('http://localhost:8000/filter_map_sale_residential_plots',
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
        set_load(2);
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

    if(load == 5){
        return(
            <div>
                
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} size="large" onChange={handleRatingChange} />

                    <button onClick={submit_ratings_filetred}>SUBMIT RATING</button>
                    
                    
                
            </div>
        );

    }

    if(load == 2){
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
                        filtered_data.length === 0 ? (
                            <p>No data available</p>
                        ) :(filtered_data.map((key,index)=>{
                        return (
                            <div key={index}>
    
                                <p>address is</p>
                                <p>{key.addresstrivia}</p>
                                <p>area size</p>
                                <p>{key.areaSize}</p>
    
                                <p>total amount</p>
                                <p>{key.totalAmount}</p>
    
                                <button accessKey={index} onClick={move_to_maps_p}>go to location</button>
                                <button accessKey={index} onClick={ratebox_filtered}>Rate property</button>
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
                    })
    
                )}
                
    
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

export default M_sale_residential_plots;