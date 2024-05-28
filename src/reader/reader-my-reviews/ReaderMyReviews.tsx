import React, { useState } from 'react';
import MenuAppBar from '../../menu-app-bar/MenuAppBar';
import ReaderDrawerMenu from '../reader-drawer-menu/ReaderDrawerMenu';
import BottomFooter from '../../bottom-footer/BottomFooter';
import { TextField, Box, Typography, Grid, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReaderSortableReviewsTable from "../reader-sortable-reviews-table/ReaderSortableReviewsTable";

const ReaderMyReviews: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const reviews = [
        { id: 1, bookTitle: 'Book 1', author: 'Author 1', review: 'Great book, highly recommended!', rating: 4.5},
        { id: 2, bookTitle: 'Book 2', author: 'Author 2', review: 'Awesome read, could not put it down!', rating: 5 },
    ];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredReviews = reviews.filter((review) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            review.bookTitle.toLowerCase().includes(searchLower) ||
            review.author.toLowerCase().includes(searchLower) ||
            review.review.toLowerCase().includes(searchLower) ||
            review.rating.toString().includes(searchLower)
        );
    });

    return (
        <div>
            <MenuAppBar title="Library Management System" toggleDrawer={toggleDrawer} />
            <Box p={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Search for review"
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
                <Typography variant="h4" gutterBottom>My Reviews</Typography>
                <ReaderSortableReviewsTable reviews={filteredReviews} />
            </div>
            <BottomFooter />
        </div>
    );
};

    export default ReaderMyReviews;
