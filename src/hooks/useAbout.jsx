import { useEffect, useState } from "react";

const useAbout = () => {
    const [about,setAbout] = useState([])

    useEffect(()=>{
        fetch('https://electronics-server-nine.vercel.app/aboutMan')
        .then(res => res.json())
        .then(data =>{
            setAbout(data)
        })
    },[])
    return [about]
};

export default useAbout;