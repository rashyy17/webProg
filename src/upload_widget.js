import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Upload(){
    let a = useRef();
    let b = useRef();
    useEffect(()=>{

        a.current = window.cloudinary;
        b.current = a.current.createUploadWidget({

            cloud_name: 'dqhddm7mi',
            api_key: '222323681783653',
            api_secret: 'JYjcMfIJhwySByknWD2z_6B7J8Q',

        },function(error,result){
            if (!error && result && result.event === "success") {
                const file = result.info;
                console.log(file.secure_url);
            }
        });

    },[]);
    return (
        <button onClick={()=>{
            b.current.open();
        }}>UPLOAD IMAGES AND VIDEOS </button>
    );
}
export default Upload;