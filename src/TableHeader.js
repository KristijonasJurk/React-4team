import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export default function TableHeader(props) {
    return (
        <TableHead>
            <TableRow>
                <TableCell keys='name'>
                    <TableSortLabel
                        active={"name" === "name"}
                        direction='asc'
                    // onClick={createSortHandler("name")}
                    >
                        Name
                    </TableSortLabel>
                </TableCell>
                <TableCell keys='age'>
                    <TableSortLabel
                        active={"age" === "age"}
                        direction='desc'
                    // onClick={createSortHandler("age")}
                    >
                        Age
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}
