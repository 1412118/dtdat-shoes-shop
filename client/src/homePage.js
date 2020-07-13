import React, {useState, useEffect} from "react"
import axios from "axios"

const HomePage = () => {
    const [cats, setCats] = useState([]);
    
    useEffect(() => {
        const fetchData = async () =>{
            let result = await axios.get('/cats').then(res => res.data);
            setCats(result);
        };
        fetchData();
    },[]);

    console.log(cats);
    
    return(
        cats.map(cat => <div>{cat.name}</div>)
    )
}

export default HomePage;