import React, {useState, useEffect} from "react"

import {getCollections} from "./api.js"

const Collections = () => {
    const [cats, setCats] = useState([]);
    const [error, setError] = useState("");
    
    // useEffect(() => {
    //     const fetchData = async () =>{
    //         let result = await axios.get('/cats').then(res => res.data);
    //         setCats(result);
    //     };
    //     fetchData();
    // },[]);

    let loadCollection = () => {
        getCollections().then((data) => {
            if(data.error){
                setError(data.error);
            }
            else{
                setCats(data);
            }
        })
    }

    useEffect(() => {
        loadCollection()
    }, []);
    
    //console.log(cats);
    
    return(
        cats.map(cat => <div>{cat.name}</div>)
    )
}

export default Collections;