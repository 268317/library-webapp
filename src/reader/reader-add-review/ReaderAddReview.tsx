import React from 'react';
import {Typography, Drawer, Box, Grid, TextField, Button } from '@mui/material';
import BottomFooter from '../../bottom-footer/BottomFooter';
import ReaderDrawerMenu from '../reader-drawer-menu/ReaderDrawerMenu';
import MenuAppBar from '../../menu-app-bar/MenuAppBar';

const ReaderAddReview: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div>
            <MenuAppBar title="Library Management System" toggleDrawer={toggleDrawer} />
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <ReaderDrawerMenu open={drawerOpen} onClose={toggleDrawer} />
            </Drawer>
            <Box p={2} sx={{ textAlign: 'center' }}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>Add New Review</Typography>
                        <TextField
                            fullWidth
                            label="Book Title"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Author"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Review"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Rating"
                            variant="outlined"
                            margin="normal"
                        />
                        <Button variant="contained" color="primary">
                            Add Review
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <BottomFooter />
        </div>
    );
};

export default ReaderAddReview;
