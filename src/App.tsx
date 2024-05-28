import React from 'react';
import './App.css';
import LoginForm from './login-form/LoginForm';
import { Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ReaderHomePage from './home-page/ReaderHomePage';
import ReaderMyBooks from './reader/reader-my-books/ReaderMyBooks';
import ReaderMyWishlist from "./reader/reader-my-wishlist/ReaderMyWishlist";
import ReaderMyReviews from "./reader/reader-my-reviews/ReaderMyReviews";
import ReaderAddReview from "./reader/reader-add-review/ReaderAddReview";
import ReaderProfile from "./reader/reader-profile/ReaderProfile";
import ReaderEditProfile from "./reader/reader-edit-profile/ReaderEditProfile";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/home" element={<ReaderHomePage />}>
                    <Route
                        path="1"
                        element={
                            <>
                                <div
                                    style={{
                                        height: '300px',
                                        width: '100%',
                                        backgroundColor: 'red',
                                    }}
                                />
                            </>
                        }
                    />
                    <Route
                        path="2"
                        element={
                            <>
                                <div
                                    style={{
                                        height: '300px',
                                        width: '100%',
                                        backgroundColor: 'blue',
                                    }}
                                />
                            </>
                        }
                    />
                </Route>
                <Route path="/my-books" element={<ReaderMyBooks />} />
                <Route path="/my-wishlist" element={<ReaderMyWishlist />} />
                <Route path="/my-reviews" element={<ReaderMyReviews />} />
                <Route path="/review" element={<ReaderAddReview />} />
                <Route path="/profile" element={<ReaderProfile />} />
                <Route path="/profile-edit" element={<ReaderEditProfile />} />
                <Route path="go to home" element={<ReaderHomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
