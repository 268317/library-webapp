import './LoginForm.css';
import { Button, TextField, Typography, Link, Grid, Paper } from '@mui/material';
import { LibraryBooksOutlined as LibraryIcon } from '@mui/icons-material'; // Importowanie ikony z Material-UI
import LoginIcon from '@mui/icons-material/Login';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const onSubmit = useCallback(
        (values: { username: string, password: string }, formik: any) => {
            navigate('/home');
            console.log('/home');
        },
        [navigate],
    );

    const validationSchema = useMemo(
        () =>
            yup.object().shape({
                username: yup.string().required('Required'),
                password: yup
                    .string()
                    .required('Required')
                    .min(8, 'Password must be at least 8 characters'),
            }),
        [],
    );

    return (
        <Grid container justifyContent="center" alignItems="center" className="login-container">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={3} className="login-paper">
                    <LibraryIcon fontSize="large" className="library-icon" /> {/* Użycie ikony z Material-UI */}
                    <Typography variant="h4" gutterBottom>
                        Welcome Back!
                    </Typography>
                    <Formik initialValues={{ username: '', password: '' }}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnChange
                            validateOnBlur>
                        {(formik: any) => (
                            <form className="login-form" id="signForm" onSubmit={formik.handleSubmit} noValidate>
                                <TextField
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                    name="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && !!formik.errors.username}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && !!formik.errors.password}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <Button
                                    variant="contained"
                                    startIcon={<LoginIcon />}
                                    type="submit"
                                    form="signForm"
                                    disabled={!(formik.isValid && formik.dirty)}
                                >
                                    Sign in
                                </Button>
                                <Typography variant="body2" className="signup-link">
                                    Don't have an account? <Link href="#" underline="hover">Sign up</Link>
                                </Typography>
                            </form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default LoginForm;
