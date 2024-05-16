import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface MenuAppBarProps {
    title: string;
    toggleDrawer: () => void;
}

const MenuAppBar: React.FC<MenuAppBarProps> = ({ title, toggleDrawer }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <IconButton
                    color="inherit"
                    aria-controls="avatar-menu"
                    aria-haspopup="true"
                    onClick={handleAvatarClick}
                    sx={{ mr: 2 }}
                >
                    <AccountCircleIcon />
                </IconButton>
                <Menu
                    id="avatar-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MenuAppBar;
