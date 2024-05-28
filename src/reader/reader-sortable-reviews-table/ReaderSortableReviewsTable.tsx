import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Paper
} from '@mui/material';

interface Review {
    id: number;
    bookTitle: string;
    author: string;
    review: string;
    rating: number;
}

interface SortableReviewsTableProps {
    reviews: Review[];
}

type Order = 'asc' | 'desc';

const ReaderSortableReviewsTable: React.FC<SortableReviewsTableProps> = ({ reviews }) => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Review>('bookTitle');

    const handleRequestSort = (property: keyof Review) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedReviews = reviews.sort((a, b) => {
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
                                active={orderBy === 'bookTitle'}
                                direction={orderBy === 'bookTitle' ? order : 'asc'}
                                onClick={() => handleRequestSort('bookTitle')}
                            >
                                Book Title
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
                                active={orderBy === 'review'}
                                direction={orderBy === 'review' ? order : 'asc'}
                                onClick={() => handleRequestSort('review')}
                            >
                                Review
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedReviews.map((review) => (
                        <TableRow key={review.id}>
                            <TableCell>{review.bookTitle}</TableCell>
                            <TableCell>{review.author}</TableCell>
                            <TableCell>{review.review}</TableCell>
                            <TableCell>{review.rating}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReaderSortableReviewsTable;
