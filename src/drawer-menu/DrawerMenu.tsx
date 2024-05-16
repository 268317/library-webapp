import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HistoryIcon from '@mui/icons-material/History';
import RateReviewIcon from '@mui/icons-material/RateReview';

interface DrawerMenuProps {
    open: boolean;
    onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
                <ListItem button onClick={() => console.log("Navigate to Books")}>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="Books" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Add new book")}>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add new book" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Loan management")}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Loan management" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Readers")}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Readers" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Add new reader")}>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add new reader" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Reports")}>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Add new report")}>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add new report" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to My loan history")}>
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="My loan history" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to Add a review")}>
                    <ListItemIcon>
                        <RateReviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add a review" />
                </ListItem>
                <ListItem button onClick={() => console.log("Navigate to My books")}>
                    <ListItemIcon>
                        <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary="My books" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default DrawerMenu;
