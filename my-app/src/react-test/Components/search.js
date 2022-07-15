import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
export default function Search(props)
{
    let {setMyFilter}  = props
    function filter(e)
    {
        setMyFilter(e.target.value)
    }

    return(
        <form>
            <TextField id="filled-basic" label="search..." variant="filled" onChange={(e)=>{filter(e)}} style={{marginRight:'10px'}}/>
            {/* <Button onClick={()=>{refresh()}}>refresh</Button> |  */}
            <Button onClick={()=>{setMyFilter(''); }}>clear</Button>
        </form>

    )
}