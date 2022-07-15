// import React from "react";

// export default function ListView(props){
//     return(
//         <>
//         <br></br>
//         ListView
//         </>
//     )
// }

import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ItemRow from "./itemRow";

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


export default function ListView(props) {
    const {items, myFilter, type} =props;    
  
 return (
        <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table"> 
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="left">title&nbsp;</StyledTableCell>
            <StyledTableCell align="left">year&nbsp;</StyledTableCell>
            <StyledTableCell align="left">imdbID&nbsp;</StyledTableCell>
            <StyledTableCell align="left">type&nbsp;</StyledTableCell>
            <StyledTableCell align="left">poster&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {
                            items.items&&
                            items.items.filter(item => item.Title.toLowerCase().includes(myFilter) && item.Type==type).map((item) =>  {
                                   return <ItemRow key={item.Year} item = {item}/>
                            })
                            }
        </TableBody>
        </Table> 
        </TableContainer>         
           </>

    )
}