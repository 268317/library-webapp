import React, { useState } from 'react';
import MenuAppBar from '../menu-app-bar/MenuAppBar';
import DrawerMenu from '../drawer-menu/DrawerMenu';
import BookList from '../book-list/BookList';
import BottomFooter from '../bottom-footer/BottomFooter';
import { TextField, Box, Typography, Grid } from '@mui/material';

const HomePage: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const books = [
        { id: 1, title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', year: 2022 },
        { id: 2, title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', year: 2023 },
        { id: 3, title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', year: 2024 },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        console.log("Search for book: ", searchTerm);
    };

    return (
        <div>
            <MenuAppBar title="Library Management System" toggleDrawer={toggleDrawer} />
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Box p={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Search for book"
                            variant="outlined"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSearchSubmit();
                                }
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Box>
            <DrawerMenu open={drawerOpen} onClose={toggleDrawer} />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>Book List</Typography>
                <BookList books={books} />
            </div>
            <BottomFooter />
        </div>
    );
};

export default HomePage;
