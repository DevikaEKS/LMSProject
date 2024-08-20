import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Admincredential.css'; // Assuming you have some styles here

function createData(name, email, mobileNumber, time) {
  return { name, email, mobileNumber, time };
}

const rows = [
  createData('John', 'john@example.com', '6453456787', '10:30 AM'),
  createData('Siva', 'siva@example.com', '9653456787', '11:00 AM'),
  createData('Shivani', 'shivani@example.com', '6453456787', '11:30 AM'),
  createData('Devika', 'devika@example.com', '6453456787', '12:00 PM'),
  createData('Karthika', 'karthika@example.com', '6453456787', '12:30 PM'),
];

export default function AdminCredential() {
  return (
    <div className='mt-5'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Mobile Number</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobileNumber}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
