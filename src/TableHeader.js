import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export default function TableHeader(props) {

    const { valueToOrderBy, orderDirection, handleRequestSort } = props;

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell keys='id'>
                    <TableSortLabel
                        active={valueToOrderBy === "id"}
                        direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
                        onClick={createSortHandler("id")}
                    >
                        Id
                    </TableSortLabel>
                </TableCell>
                <TableCell keys='name'>
                    <TableSortLabel
                        active={valueToOrderBy === "name"}
                        direction={valueToOrderBy === 'name' ? orderDirection : 'asc'}
                        onClick={createSortHandler("name")}
                    >
                        Name
                    </TableSortLabel>
                </TableCell>
                <TableCell keys='categories'>
                    <TableSortLabel
                        active={valueToOrderBy === "categories"}
                        direction={valueToOrderBy === 'categories' ? orderDirection : 'asc'}
                        onClick={createSortHandler("categories")}
                    >
                        Categories
                    </TableSortLabel>
                </TableCell>
                <TableCell keys='creationDate'>
                    <TableSortLabel
                        active={valueToOrderBy === "creationDate"}
                        direction={valueToOrderBy === 'creationDate' ? orderDirection : 'asc'}
                        onClick={createSortHandler("creationDate")}
                    >
                        Creation date
                    </TableSortLabel>
                </TableCell>
                <TableCell keys='price'>
                    <TableSortLabel
                        active={valueToOrderBy === "price"}
                        direction={valueToOrderBy === 'price' ? orderDirection : 'asc'}
                        onClick={createSortHandler("price")}
                    >
                        Price
                    </TableSortLabel>
                </TableCell>
                <TableCell keys='currency'>
                    <TableSortLabel
                        active={valueToOrderBy === "currency"}
                        direction={valueToOrderBy === 'currency' ? orderDirection : 'asc'}
                        onClick={createSortHandler("currency")}
                    >
                        Currency
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}
