import React from 'react';
import {Drawer, List, ListItem, ListItemText, Box, Grid, Avatar, Button } from '@mui/material';
import BottomFooter from '../../bottom-footer/BottomFooter';
import ReaderDrawerMenu from '../reader-drawer-menu/ReaderDrawerMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuAppBar from '../../menu-app-bar/MenuAppBar';

const ReaderEditProfile: React.FC = () => {
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
            <Box p={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={4} md={2}>
                        <Box textAlign="center">
                            <Avatar sx={{ width: 100, height: 100 }}>
                                <AccountCircleIcon fontSize="large" />
                            </Avatar>
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemText primary="Name" secondary={<input type="text" defaultValue="John Doe" />} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={<input type="text" defaultValue="john.doe@example.com" />} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Address" secondary={<input type="text" defaultValue="123 Main St, City, Country" />} />
                            </ListItem>
                        </List>
                        <Box textAlign="center">
                            <Button variant="contained" color="primary">Save Changes</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <BottomFooter />
        </div>
    );
};

export default ReaderEditProfile;
