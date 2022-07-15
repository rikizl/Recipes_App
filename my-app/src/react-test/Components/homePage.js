import { Button } from "@mui/material";
import React, {  useState } from "react";
import GridView from "./gridView";
import ListView from "./listView";
import Search from "./search";
import Tabs from "./tabs";

export default function HomePage(props){

    const [ toggleButton , setToggleButton] = useState(true);
    const [ myFilter, setMyFilter] = useState('')
    const [type, setType] = useState('movie');
    const items = props;


    function changeView()
    {
        setToggleButton(!toggleButton);
    }
    return ( 
        <>
        <Tabs items={items} setType={setType} myFilter={myFilter}></Tabs>
        <Search setMyFilter={setMyFilter}></Search>
        <Button onClick={()=>{changeView()}}>change view</Button>
        {toggleButton && <GridView items={items} myFilter={myFilter} type={type}></GridView>}
        {!toggleButton && <ListView items={items} myFilter={myFilter} type={type}></ListView>}
        </>
    )
}