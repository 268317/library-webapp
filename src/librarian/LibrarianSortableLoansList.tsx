import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, Button } from '@mui/material';

interface Loan {
    id: number;
    book: string;
    borrower: string;
    loanDate: string;
    returnDate: string;
    actualReturnDate: string;
    status: string;
}

interface SortableLoansTableProps {
    loans: Loan[];
}

type Order = 'asc' | 'desc';

const LibrarianSortableLoansList: React.FC<SortableLoansTableProps> = ({ loans }) => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Loan>('book');

    const handleRequestSort = (property: keyof Loan) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedLoans = loans.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'book'}
                                direction={orderBy === 'book' ? order : 'asc'}
                                onClick={() => handleRequestSort('book')}
                            >
                                Book
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'borrower'}
                                direction={orderBy === 'borrower' ? order : 'asc'}
                                onClick={() => handleRequestSort('borrower')}
                            >
                                Borrower
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'loanDate'}
                                direction={orderBy === 'loanDate' ? order : 'asc'}
                                onClick={() => handleRequestSort('loanDate')}
                            >
                                Loan Date
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'returnDate'}
                                direction={orderBy === 'returnDate' ? order : 'asc'}
                                onClick={() => handleRequestSort('returnDate')}
                            >
                                Return Date
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'actualReturnDate'}
                                direction={orderBy === 'actualReturnDate' ? order : 'asc'}
                                onClick={() => handleRequestSort('actualReturnDate')}
                            >
                                Actual Return Date
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'status'}
                                direction={orderBy === 'status' ? order : 'asc'}
                                onClick={() => handleRequestSort('status')}
                            >
                                Status
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedLoans.map((loan) => (
                        <TableRow key={loan.id}>
                            <TableCell>{loan.book}</TableCell>
                            <TableCell>{loan.borrower}</TableCell>
                            <TableCell>{loan.loanDate}</TableCell>
                            <TableCell>{loan.returnDate}</TableCell>
                            <TableCell>{loan.actualReturnDate}</TableCell>
                            <TableCell>{loan.status}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" disabled={loan.status !== 'Pending'}>
                                    Accept
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LibrarianSortableLoansList;
