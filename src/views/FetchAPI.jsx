import { useEffect, useState } from "react";

export default function FetchAPI (){
    const [employees, setEmployees] = useState([]);

    useEffect(() =>{
        fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members")
    },[])

    
}