import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Box, Button } from '@mui/material';

interface Book {
    author: string;
    availableCopies: number;
    id: number;
    isbn: string;
    publisher: string;
    title: string;
    year: number;
    rating: 4.5;
}

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <List>
            {books.map((book, index) => (
                <Box key={book.id} sx={{ marginBottom: index < books.length - 1 ? 2 : 0 }}>
                    <ListItem
                        disablePadding
                        sx={{
                            borderRadius: 2,
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                            transition: 'box-shadow 0.3s ease-in-out',
                            backgroundColor: 'rgb(237,244,251)',
                            '&:hover': {
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            },
                        }}
                    >
                        <ListItemText
                            primary={
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    {book.title}
                                </Typography>
                            }
                            secondary={
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#666', marginTop: 0.5 }}
                                >
                                    {`ISBN: ${book.isbn} | Author: ${book.author} | Publisher: ${book.publisher} | Year: ${book.year} | Rating: ${book.rating} | Available copies: ${book.availableCopies}`}
                                </Typography>
                            }
                        />
                        <Button variant="contained" color="primary" onClick={() => console.log("Rent")}>
                            Rent
                        </Button>
                        <Button variant="outlined" onClick={() => console.log("See details")}>
                            See details
                        </Button>
                        <Button variant="outlined" onClick={() => console.log("Update")}>
                            Update
                        </Button>
                        <Button variant="contained" color="error" onClick={() => console.log("Delete")}>
                            Delete
                        </Button>
                    </ListItem>
                    {index < books.length - 1 && <Divider sx={{ marginY: 1 }} />}
                </Box>
            ))}
        </List>
    );
};

export default BookList;
