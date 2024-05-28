import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

interface MenuAppBarProps {
    title: string;
    toggleDrawer: () => void;
}

const MenuAppBar: React.FC<MenuAppBarProps> = ({ title, toggleDrawer }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate(); // Użycie useNavigate

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        navigate('/login'); // Przekierowanie na stronę logowania
    };

    const handleHomeClick = () => {
        navigate('/home'); // Przekierowanie na stronę główną
    };

    const handleProfileClick = () => {
        navigate('/profile'); // Przekierowanie na stronę profilu użytkownika
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{ mr: 4 }}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="go to home"
                    onClick={handleHomeClick} // Obsługa kliknięcia na ikonę domku
                    sx={{ mr: 2 }}
                >
                    <HomeIcon fontSize="large" />
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
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
                <Menu
                    id="avatar-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MenuAppBar;
