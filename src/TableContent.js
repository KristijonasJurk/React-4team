import React from 'react';
import TableHeader from './TableHeader'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import { TableContainer } from '@material-ui/core';

const rowInformation = [
    { "name": "Bob Johnson", age: 50 },
    { "name": "Bobby John", age: 40 }
]

export default function TableContent() {

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHeader />
                </Table>
            </TableContainer>
        </>
    )
}
