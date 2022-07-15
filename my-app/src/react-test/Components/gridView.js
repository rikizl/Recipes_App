import React, { useEffect, useState } from "react";

export default function GridView(props)
{
    const {items, myFilter, type} =props;
    const style = {
        border: '1px black solid',
        height: '300px',
        width: '200px',
        display: 'inline-block',
        margin: '2%',
        cursor: 'pointer'
    }
    return(
        <>  
        
     {/* <Button onClick={()=>{refresh()}} style={{variant:"outlined"}}>refresh</Button> */}

        <br></br>
        {
            items && 
            items.items.filter(item => item.Title.toLowerCase().includes(myFilter) && item.Type==type).map((item) => {
                return (
                    <div key={item.id} style={style} onClick={() => {
                    }}>
                        <img  src={item.Poster} style={{width:"100px"}}></img>
                        <p>{item.Title}</p>
                        <p>{item.Year}</p>
                    </div>
                ) 
            })
        }
        
        </>
    )
}
