import React, { useState } from 'react';
import { TextField, Box, Typography, Grid, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuAppBar from '../menu-app-bar/MenuAppBar';
import ReaderDrawerMenu from '../reader/reader-drawer-menu/ReaderDrawerMenu';
import LibrarianSortableLoansList from '../librarian/LibrarianSortableLoansList';
import BottomFooter from '../bottom-footer/BottomFooter';

const LibrarianLoans: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const loans = [
        { id: 1, book: 'Book 1', borrower: 'Borrower 1', loanDate: '2024-05-01', returnDate: '2024-06-01', actualReturnDate: '', status: 'Pending' },
        { id: 2, book: 'Book 2', borrower: 'Borrower 2', loanDate: '2024-05-02', returnDate: '2024-06-02', actualReturnDate: '2024-06-01', status: 'Returned' },
    ];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredLoans = loans.filter((loan) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            loan.book.toLowerCase().includes(searchLower) ||
            loan.borrower.toLowerCase().includes(searchLower) ||
            loan.loanDate.includes(searchLower) ||
            loan.returnDate.includes(searchLower) ||
            loan.status.toLowerCase().includes(searchLower)
        );
    });

    return (
        <div>
            <MenuAppBar title="Library Management System" toggleDrawer={toggleDrawer} />
            <Box p={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Search for loan"
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
                <Typography variant="h4" gutterBottom>Loan History</Typography>
                <LibrarianSortableLoansList loans={filteredLoans} />
            </div>
            <BottomFooter />
        </div>
    );
};

export default LibrarianLoans;
