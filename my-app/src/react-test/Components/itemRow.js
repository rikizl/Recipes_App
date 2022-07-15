import React, { useState } from "react";
//import BasicModal from "./BasicModel";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Redirect from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function ItemRow(props)
{
    const { id, item} = props;

    return(
        <>
<StyledTableRow key={id}>
<StyledTableCell component="th" scope="item">

{/* <BasicModal item={item}></BasicModal> */}
</StyledTableCell>
<StyledTableCell align="left">{item.Title}</StyledTableCell> 
<StyledTableCell align="left">{item.Year}</StyledTableCell>
<StyledTableCell align="left">{item.imdbID}</StyledTableCell>
<StyledTableCell align="left">{item.Type}</StyledTableCell>

<StyledTableCell align="left"><img  src={item.Poster} style={{width:"50px"}}></img></StyledTableCell>


</StyledTableRow>


        </>
    )
}