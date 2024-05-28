import React from 'react';
import {Drawer, List, ListItem, ListItemText, Box, Grid, Avatar, Button } from '@mui/material';
import BottomFooter from '../../bottom-footer/BottomFooter';
import ReaderDrawerMenu from '../reader-drawer-menu/ReaderDrawerMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuAppBar from '../../menu-app-bar/MenuAppBar';
import { useNavigate } from 'react-router-dom';

const ReaderProfile: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleEditProfile = () => {
        navigate('/profile-edit');
    };

    return (
        <div>
            <MenuAppBar title="Library Management System" toggleDrawer={toggleDrawer} />
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <ReaderDrawerMenu open={drawerOpen} onClose={toggleDrawer} />
            </Drawer>
            <Box p={2} sx={{ textAlign: 'center' }}>
                <Grid container justifyContent="center">
                    <Grid item xs={4} md={2}>
                        <Avatar sx={{ width: 100, height: 100 }}>
                            <AccountCircleIcon fontSize="large" />
                        </Avatar>
                        <List>
                            <ListItem>
                                <ListItemText primary="Name" secondary="John Doe" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary="john.doe@example.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Address" secondary="123 Main St, City, Country" />
                            </ListItem>
                        </List>
                        <Button variant="contained" color="primary" onClick={handleEditProfile}>
                            Edit Profile
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <BottomFooter />
        </div>
    );
};

export default ReaderProfile;
