import './App.css';
import { Grid, Button, TextField } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useFormik } from "formik";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useEffect } from 'react';


function Login() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);



    const schema = yup.object().shape({
        email: yup
            .string()
            .max(50, "Must Be 50 characters Or Less")
            .required("Enter Valid Email")
            .email(),
        password: yup
            .string()
            .required('Enter New Password')
            .min(8, 'Too Short!')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/,
                'Password Should Be At Least 8 Characters Must Include Uppercase, Lowercase, Number And Special Characters'
            )
            .matches(
                /^[^\s]*$/,
                'Password Should Not Contain Spaces'
            ),
    });


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (value) => {
            const errors = {};
            if (!value.email)
                errors.email = 'Email Required'
            if (!value.password)
                errors.password = 'Password Required'
            return errors;
        },
        validationSchema: schema,
        onSubmit: (data, { resetForm }) => {
            resetForm();
            setIsFormSubmitted(true);
            toast.success("Login successful. You will be redirected to your order page shortly.");
            setTimeout(() => {
                navigate("/restaurant");
            }, 5000);
        },
    });
    return (
        <div>
            <ToastContainer />
            <div className='first'>
                <Grid container>
                    <Grid item xs={1.5}>
                        <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white', textAlign: 'center' }}><b><RestaurantMenuIcon /> <a href='/home' style={{ color: 'white' }}>Swiggy</a></b></h2>
                    </Grid>
                    <Grid item xs={9}>
                        <br />
                    </Grid>
                    <Grid item xs={1.5}>
                        <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white', textAlign: 'center' }}><b><Button variant='contained' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', backgroundColor: 'yellow', color: 'black', fontSize: 15, borderRadius: 90 }} onClick={() => navigate("/home")}><b>Home</b></Button></b></h2>
                    </Grid>
                </Grid>
            </div>
            <div className='fourth'>
                <Grid container>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={{ fontFamily: 'timesnewroman', justifyContent: 'center', display: 'flex' }}><b><PersonIcon sx={{ fontSize: 40 }} /></b></h1>
                        <h1 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center', fontSize: 35 }}><b>Welcome Back! Log In to Your Account</b></h1>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                        <TextField
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.errors.email && formik.touched.email}
                            helperText={formik.touched.email ? formik.errors.email : ""}
                            sx={{
                                width: 400,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                        <TextField
                            id="outlined-basic"
                            label="Your Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.errors.password && formik.touched.password}
                            helperText={formik.touched.password ? formik.errors.password : ""}
                            sx={{
                                width: 400,
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={5.35} sx={{ justifyContent: 'right', display: 'flex' }}>
                        {isFormSubmitted ? '' : <a href="/resetpassword" style={{ color: 'indigo' }}>Forgot Password?</a>}
                    </Grid>
                    <Grid item xs={6.65}>
                        <br />
                    </Grid>
                    <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                        {isFormSubmitted ? '' : <Button variant='contained' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', backgroundColor: 'black', color: 'yellow', fontSize: 15, marginTop: 2 }} onClick={() => formik.handleSubmit()}><b>Login</b></Button>}
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                </Grid>
            </div>
            <div className='fifth'>
                <Grid container>
                    <Grid item xs={2}>
                        <h1 style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b><RestaurantMenuIcon sx={{ color: 'yellow' }} /></b></h1>
                        <h1 style={{ color: 'yellow', fontFamily: 'cursive', textAlign: 'center' }}><b><a href='/home' style={{ color: 'yellow' }}>Swiggy</a></b></h1>
                    </Grid>
                    <Grid item xs={4}>
                        <br />
                    </Grid>
                    <Grid item xs={3} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <div>
                            <h2 style={{ color: 'white', textAlign: 'center' }}><b>About Swiggy</b></h2>
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={() => navigate("/about")}>About Us</Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'left', marginLeft: '-4px' }} onClick={() => navigate("/team")}>Team </Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={() => navigate("/careers")}>Careers</Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={() => navigate("/accessibility")}>Accessibility</Button>
                        </div>
                    </Grid>
                    <Grid item xs={3} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <div>
                            <h2 style={{ color: 'white', marginLeft: '10px' }}><b>Get Help</b></h2>
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center', marginLeft: '-2px' }} onClick={() => navigate("/faq")}>FAQs</Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={() => navigate("/cities")}>View all cities</Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={() => navigate("/contact")}>Contact support</Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={() => navigate("/terms&condititons")}>Terms and conditions</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                        <br />
                    </Grid>
                    <Grid item xs={4.5}>
                        <br />
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <Button><b><FacebookIcon sx={{ color: 'white' }} onClick={() => navigate("/home")} /></b></Button>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <Button><b><TwitterIcon sx={{ color: 'white' }} onClick={() => navigate("/home")} /></b></Button>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <Button><b><InstagramIcon sx={{ color: 'white' }} onClick={() => navigate("/home")} /></b></Button>
                    </Grid>
                    <Grid item xs={4.5}>
                        <br />
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={10}>
                        <br />
                        <hr />
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <h2 style={{ color: 'white', justifyContent: 'center', display: 'flex', alignContent: 'center', textAlign: 'center', fontFamily: 'TimesNewRoman' }}>© 2023   Copyright: Swiggy</h2>
                    </Grid>
                    <Grid container xs={12}>
                        <br />
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}
export default Login;