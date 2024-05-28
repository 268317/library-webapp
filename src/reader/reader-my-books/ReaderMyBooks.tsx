import React, { useState } from 'react';
import MenuAppBar from '../../menu-app-bar/MenuAppBar';
import ReaderDrawerMenu from '../reader-drawer-menu/ReaderDrawerMenu';
import ReaderSortableMyBookTable from '../reader-sortable-my-book-table/ReaderSortableMyBookTable';
import BottomFooter from '../../bottom-footer/BottomFooter';
import { TextField, Box, Typography, Grid, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ReaderMyBooks: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const books = [
        { id: 1, title: 'Book 1', isbn: '123-456-789', author: 'Author 1', publisher: 'Publisher 1', year: 2022, availableCopies: 5, rating: 4.5},
        { id: 2, title: 'Book 2', isbn: '987-654-321', author: 'Author 2', publisher: 'Publisher 2', year: 2023, availableCopies: 3, rating: 5 },
   ];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter((book) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            book.title.toLowerCase().includes(searchLower) ||
            book.isbn.includes(searchLower) ||
            book.author.toLowerCase().includes(searchLower) ||
            book.publisher.toLowerCase().includes(searchLower) ||
            book.year.toString().includes(searchLower) ||
            book.availableCopies.toString().includes(searchLower)
        );
    });

    return (
        <div>
            <MenuAppBar title="Library Management System" toggleDrawer={toggleDrawer} />
            <Box p={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Search for book"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <ReaderDrawerMenu open={drawerOpen} onClose={toggleDrawer} />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>My Loan History</Typography>
                <ReaderSortableMyBookTable books={filteredBooks} />
            </div>
            <BottomFooter />
        </div>
    );
};

export default ReaderMyBooks;
