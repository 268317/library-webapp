import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useNavigate } from 'react-router-dom';

interface DrawerMenuProps {
    open: boolean;
    onClose: () => void;
}

const ReaderDrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
    const navigate = useNavigate();

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                <ListItem button onClick={() => navigate('/my-books')}>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Books" />
                </ListItem>
                <ListItem button onClick={() => navigate('/my-wishlist')}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="My wishlist" />
                </ListItem>
                <ListItem button onClick={() => navigate('/my-reviews')}>
                    <ListItemIcon>
                        <RateReviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="My reviews" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default ReaderDrawerMenu;
