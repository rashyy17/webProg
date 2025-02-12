import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./loader.css";

function Rent_commercial_workspace() {
    let [load,set_load] = useState(0);
    const [formData, setFormData] = useState({
        Ready_to_move_offices : 0,
        Bare_shell_offices : 0,
        shops_and_retail: 0,
        Ware_house: 0,
        cold_storage: 0,
        FactoryManufacturing: 0,
        Hotel: 0,
        Guest_House: 0,
        
        parking: 0,
        gasPipeline: 0,
        lift: 0,
        securityPersonnel: 0,
        powerBackup: 0,
        acRoom: 0,
        wifi: 0,
        areaSize: "",
        addresstrivia: "",
        totalAmount: "",
        Email:"",
        Url : "",
        state:"",
        city:"",
        pincode:"",
        
        
    });
    let [images,set_image] = useState([]);

    let a = useRef();
    let b = useRef();
    useEffect(()=>{

        a.current = window.cloudinary;
        b.current = a.current.createUploadWidget({

            cloudName: "dqhddm7mi",
            apiKey: "222323681783653",
            uploadPreset: "aarvasa",
            folder: "property_media",
            sources: ["local", "camera"],
            resourceType: "auto",

        },function(error,result){
            if (!error && result && result.event === "success") {
                const file = result.info;
                console.log(file.secure_url);
                let rghj = images;
                rghj.push(file.secure_url);

                set_image([...rghj]);
            }
        });

    },[]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked ? 1 : 0 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    let sbmt = async()=>{
        set_load(1);
        let abd = {...formData};
        abd.images = images;
        let op = await fetch('http://localhost:8000/post_rent_commercial_workspace',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(abd),
            }
        );

        let kfg = await op.json();

        if(kfg.message == "successful"){
            set_load(0);

        }


    }

    if(load == 1){
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
            
            
        );
    }

    return (
        <div>
            <h2>Rent Your Property</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {Object.keys(formData).map((key) => (
                    key.includes("areaSize") || key.includes("addresstrivia") || key.includes("noOfRooms") || key.includes("totalAmount") || key.includes("Email") || key.includes("Url") || key.includes("state") || key.includes("city") || key.includes("pincode") ? (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                            <label>{key.replace(/([A-Z])/g, " $1").trim()}:</label>
                            <input type="text" name={key} value={formData[key]} onChange={handleInputChange} />
                        </div>
                    ) : (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                            <label>{key.replace(/([A-Z])/g, " $1").trim()}</label>
                            <input
                                type="checkbox"
                                name={key}
                                checked={formData[key] === 1}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    )
                ))}
            </div>
            <button onClick={()=>{
            b.current.open();
        }}>UPLOAD IMAGES AND VIDEOS </button>
            <button onClick={sbmt} style={{ marginTop: "10px" }}>SUBMIT FORM </button>
        </div>
    );
}

export default Rent_commercial_workspace;
