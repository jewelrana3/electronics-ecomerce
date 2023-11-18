import  { useEffect, useState } from 'react';

const useUsers = () => {
   const [users,setUsers] = useState('')
   useEffect(()=>{
    fetch('https://electronics-server-nine.vercel.app/users')
    .then(res => res.json())
    .then(data =>{
        setUsers(data)
    })
   },[])
   return [users]
};

export default useUsers;