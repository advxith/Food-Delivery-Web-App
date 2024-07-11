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


function Signup() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);


    const schema = yup.object().shape({
        name: yup
            .string()
            .max(50, "Must Be 50 Characters Or Less")
            .required("Enter Valid Name")
            .matches(/^[A-Za-z ]+$/, "Enter valid Name"),

        email: yup
            .string()
            .max(50, "Must Be 50 Characters Or Less")
            .required("Enter Valid Email")
            .email(),
        phone: yup
            .string()
            .matches(/^[0-9]+$/, "Must Be Valid Phone Number")
            .max(10, "Must Be 10 Characters")
            .min(10, "Must Be 10 Characters")
            .required("Enter Valid Number"),
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
        confirmPassword: yup
            .string()
            .required('Confirm Password Is Required')
            .oneOf([yup.ref('password')], 'Passwords Must Match')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
        validate: (value) => {
            const errors = {};
            if (!value.name)
                errors.name = 'Name Required'
            if (!value.email)
                errors.email = 'Email Required'
            if (!value.phone)
                errors.phone = 'Phone Number Required'
            if (!value.password)
                errors.password = 'Password Required'
            if (!value.confirmPassword)
                errors.confirmPassword = 'Password Required'
            return errors;
        },
        validationSchema: schema,
        onSubmit: (data, { resetForm }) => {
            resetForm();
            setIsFormSubmitted(true);
            toast.success("Account created successfully. You will be redirected to the login page shortly.");
            setTimeout(() => {
                navigate("/login");
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
                        <h1 style={{ fontFamily: 'timesnewroman', justifyContent: 'center', display: 'flex' }}><b><PersonIcon sx={{ fontSize: 40 }} /></b></h1>
                        <h1 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center', fontSize: 35 }}><b>Create your account</b></h1>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                        <TextField
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.errors.name && formik.touched.name}
                            helperText={formik.touched.name ? formik.errors.name : ""}
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
                            label="Your Phone"
                            variant="outlined"
                            name='phone'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            error={formik.errors.phone && formik.touched.phone}
                            helperText={formik.touched.phone ? formik.errors.phone : ""}
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
                    <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                        <TextField
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            name='confirmPassword'
                            type={showConfirmPassword ? 'text' : 'password'}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            error={formik.errors.confirmPassword && formik.touched.confirmPassword}
                            helperText={formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}
                            sx={{
                                width: 400,
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                                        {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                        {isFormSubmitted ? '' : <Button variant='contained' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', backgroundColor: 'black', color: 'yellow', fontSize: 15 }} onClick={() => formik.handleSubmit()}><b>Create Account</b></Button>}
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
export default Signup;