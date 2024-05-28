import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Paper,
    Button
} from '@mui/material';

interface Book {
    id: number;
    title: string;
    isbn: string;
    author: string;
    publisher: string;
    year: number;
    availableCopies: number;
    rating: number;
}

interface SortableBookTableProps {
    books: Book[];
}

type Order = 'asc' | 'desc';

const ReaderSortableMyBookTable: React.FC<SortableBookTableProps> = ({ books }) => {
    const navigate = useNavigate();
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Book>('title');

    const handleRequestSort = (property: keyof Book) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedBooks = books.sort((a, b) => {
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
                                active={orderBy === 'title'}
                                direction={orderBy === 'title' ? order : 'asc'}
                                onClick={() => handleRequestSort('title')}
                            >
                                Title
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'isbn'}
                                direction={orderBy === 'isbn' ? order : 'asc'}
                                onClick={() => handleRequestSort('isbn')}
                            >
                                ISBN
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'author'}
                                direction={orderBy === 'author' ? order : 'asc'}
                                onClick={() => handleRequestSort('author')}
                            >
                                Author
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'publisher'}
                                direction={orderBy === 'publisher' ? order : 'asc'}
                                onClick={() => handleRequestSort('publisher')}
                            >
                                Publisher
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'year'}
                                direction={orderBy === 'year' ? order : 'asc'}
                                onClick={() => handleRequestSort('year')}
                            >
                                Year
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'availableCopies'}
                                direction={orderBy === 'availableCopies' ? order : 'asc'}
                                onClick={() => handleRequestSort('availableCopies')}
                            >
                                Available Copies
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'rating'}
                                direction={orderBy === 'rating' ? order : 'asc'}
                                onClick={() => handleRequestSort('rating')}
                            >
                                Rating
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedBooks.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.isbn}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.publisher}</TableCell>
                            <TableCell>{book.year}</TableCell>
                            <TableCell>{book.availableCopies}</TableCell>
                            <TableCell>{book.rating}/5</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => console.log("Return")}>
                                    Return
                                </Button>
                                <Button variant="outlined" onClick={() => console.log("Rent again")}>
                                    Rent again
                                </Button>
                                <Button variant="outlined" onClick={() => navigate('/review')}>
                                    Review
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReaderSortableMyBookTable;
