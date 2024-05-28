import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReplayIcon from '@mui/icons-material/Replay';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface DrawerMenuProps {
    open: boolean;
    onClose: () => void;
}

const LibrarianDrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
    const navigate = useNavigate(); // Użycie useNavigate

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                <ListItem button onClick={() => navigate('/all-books')}>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Books" />
                </ListItem>
                <ListItem button onClick={() => navigate('/loans')}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Loans" />
                </ListItem>
                <ListItem button onClick={() => navigate('/readers')}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Readers" />
                </ListItem>
                <ListItem button onClick={() => navigate('/reports')}>
                    <ListItemIcon>
                        <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>
                <ListItem button onClick={() => navigate('/returns')}>
                    <ListItemIcon>
                        <ReplayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Returns" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default LibrarianDrawerMenu;
