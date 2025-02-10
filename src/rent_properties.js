import React, { useState } from "react";
import Upload from "./upload_widget";
function R() {
    const [formData, setFormData] = useState({
        independentHouseVilla: 0,
        independentBuilderFloor: 0,
        residentialApartment: 0,
        farmHouse: 0,
        servicedApartments: 0,
        family: 0,
        singleMen: 0,
        singleWomen: 0,
        tenantsCompanyLease: 0,
        parking: 0,
        gasPipeline: 0,
        lift: 0,
        park: 0,
        gymnasium: 0,
        swimmingPool: 0,
        securityPersonnel: 0,
        powerBackup: 0,
        clubHouse: 0,
        acRoom: 0,
        wheelchairFriendly: 0,
        petFriendly: 0,
        foodService: 0,
        wifi: 0,
        laundryAvailable: 0,
        areaSize: "",
        addresstrivia: "",
        noOfRooms: "",
        totalAmount: "",
        Email:"",
        Url : "",
        state:"",
        city:"",
        pincode:""
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked ? 1 : 0 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    let sbmt = async()=>{
        let op = await fetch('http://localhost:8000/post_rental_properties',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }
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
            <Upload/>
            <button onClick={sbmt} style={{ marginTop: "10px" }}>SUBMIT FORM </button>
        </div>
    );
}

export default R;
