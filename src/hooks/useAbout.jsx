import { useEffect, useState } from "react";

const useAbout = () => {
    const [about,setAbout] = useState([])

    useEffect(()=>{
        fetch('about.json')
        .then(res => res.json())
        .then(data =>{
            setAbout(data)
        })
    },[])
    return [about]
};

export default useAbout;