import { Button, ButtonBase, ButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Tabs(props){
    const {items, setType, myFilter}  =props;
    const [countMovies, setCountMovies]=useState(0)
    const [countSeries, setCountSeries]=useState(0)
    const [countGames, setCountGames]=useState(0)


    useEffect(()=>{
        console.log(items);
        let countMovies1=0;
        let countSeries1=0;
        let countGames1=0;
        console.log(items.items);
        items.items.filter(item => item.Title.toLowerCase().includes(myFilter) ).map(

            (item)=>
            {
                item.Type =="movie"?countMovies1++:
                item.Type =="series"?countSeries1++:
                countGames1++;
            }
        )
        setCountMovies(countMovies1)
        setCountSeries(countSeries1)
        setCountGames(countGames1)

    },)

    return(
        <>
        <Button onClick={()=>{setType("movie")}}>Movies ({countMovies})</Button>
        <br></br>
        <Button onClick={()=>{setType("series")}}>Series  ({countSeries})</Button>
        <br></br>
        <Button onClick={()=>{setType("game")}}>Games  ({countGames})</Button>
        <br></br>
        
        </>
    )

}