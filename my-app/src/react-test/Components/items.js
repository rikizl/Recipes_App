import React, { useEffect, useState } from "react";
import { getAll } from "../Services/service";
import HomePage from "./homePage";

export default function Items()
{
    const [items, setItems] = useState()

    useEffect(async()=>{
        let arr = await getAll()
        console.log("arr", arr.results);
        setItems(arr.results)
    }, [])
    return(
    <>
    {
        items && 
        <HomePage items={items}></HomePage>
    }

    </>
    )
}