import './App.css';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DirectionsIcon from '@mui/icons-material/Directions';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DoneIcon from '@mui/icons-material/Done';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import React, { useEffect } from 'react';

function Tomato() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const schema = yup.object().shape({
        address: yup
            .string()
            .max(50, "Must Be 50 Characters Or Less")
            .required("Enter Valid Address")
            .matches(
                /^(?!\s+$).+/,
                'Enter Valid Address'
            ),
    });

    const formik = useFormik({
        initialValues: {
            address: '',
        },
        validate: (value) => {
            const errors = {};
            if (!value.address)
                errors.name = 'Address Required'
            return errors;
        },
        validationSchema: schema,
        onSubmit: (data) => {
            console.log(data);
            navigate("/restaurant");
        },
    });


    return (
        <div>
            <div className="first">
                <Grid container>
                    <Grid item xs={1.5}>
                        <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white', textAlign: 'center' }}><b><RestaurantMenuIcon /> <a href='/home' style={{ color: 'white' }}>Swiggy</a></b></h2>
                    </Grid>
                    <Grid item xs={2}>
                        <h2><Button variant='contained' sx={{ backgroundColor: 'yellow', color: 'black', textTransform: 'none', textAlign: 'center', fontFamily: 'timesnewroman', borderRadius: 90 }} onClick={() => navigate("/restaurant")}>Browse Hotels</Button></h2>
                    </Grid>
                    <Grid item xs={6.5}>
                        <br />
                    </Grid>
                    <Grid item xs={1}>
                        <h2><Button variant='text' sx={{ color: 'yellow', textTransform: 'none', textAlign: 'center', fontFamily: 'timesnewroman' }} onClick={() => navigate("/login")}>Login</Button></h2>
                    </Grid>
                    <Grid item xs={1}>
                        <h2><Button variant='contained' sx={{ backgroundColor: 'yellow', color: 'black', textTransform: 'none', textAlign: 'center', fontFamily: 'timesnewroman', borderRadius: 90, marginLeft: -2 }} onClick={() => navigate("/signup")}>Sign Up</Button></h2>
                    </Grid>
                </Grid>
            </div>
            <div className='second'>
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
                        <br />
                    </Grid>
                    <Grid item xs={5}>
                        <br />
                    </Grid>
                    <Grid item xs={2}>
                        <Card sx={{ backgroundColor: 'black', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                            <CardContent>
                                <h1 style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b><RestaurantMenuIcon sx={{ color: 'yellow' }} /></b></h1>
                                <h1 style={{ color: 'yellow', textAlign: 'center', fontFamily: 'cursive' }}><b><u>Swiggy</u></b></h1>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={{ color: 'white', textAlign: 'center' }}><b>Food to your doorstep, order through Swiggy.</b></h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}><TextField id="filled-basic" label="Enter delivery address" name='address' value={formik.values.address} onChange={formik.handleChange} error={!!formik.errors.address} helperText={formik.errors.address} variant="filled" sx={{ backgroundColor: 'white' }} /><Button variant='contained' sx={{ borderRadius: 90, height: 55, color: 'yellow', backgroundColor: 'black', textTransform: 'none', textAlign: 'center' }} onClick={() => formik.handleSubmit()}>Find Food</Button></h1>
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
            <div className='third'>
                <Grid container>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}><DirectionsIcon sx={{ color: 'yellow', fontSize: 150 }} /></h1>
                        <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Track Orders Live</b></h2>
                        <h3 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Track your food real-time with GPS. See the estimated time for delivery.</b></h3>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}><DeliveryDiningIcon sx={{ color: 'yellow', fontSize: 150 }} /></h1>
                        <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Super Fast Delivery</b></h2>
                        <h3 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Experience Swiggy's superfast delivery for food delivered fresh and on time.</b></h3>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}><DoneIcon sx={{ color: 'yellow', fontSize: 150 }} /></h1>
                        <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>No minimum order</b></h2>
                        <h3 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Order for yourself or your group, with zero restrictions on order value.</b></h3>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                </Grid>
            </div>
            <div className='fourth'>
                <Grid container>
                    {/* First */}
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={5} marginTop={10}>
                        <h1 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b>Your food, Your choice.</b></h1>
                        <h1 style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b><RestaurantMenuIcon sx={{ color: 'black' }} /></b></h1>
                        <h2 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b>Choose from over 15000 restaurants offering a wide range of cuisines like Indian, Chinese, Mexican, Continental and more.</b></h2>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={5}>
                        <div className='burger'>
                            <br />
                        </div>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    {/* Second */}
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={5}>
                        <div className='pizza'>
                            <br />
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={5} marginTop={10}>
                        <h1 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b>Best in class delivery logistics for the finest delivery experience.</b></h1>
                        <h1 style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b><RestaurantMenuIcon sx={{ color: 'black' }} /></b></h1>
                        <h2 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b>Get it delivered right to your doorstep. Or, try pickup on your way home. It's mealtime on your time.</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={5} marginTop={10}>
                        <h1 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b>Offers, discounts and more to beat your hunger.</b></h1>
                        <h1 style={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b><RestaurantMenuIcon sx={{ color: 'black' }} /></b></h1>
                        <h2 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', justifyContent: 'center', display: 'flex', alignContent: 'center' }}><b>Find amazing deals and offers. Pay your way, be it cash, card or e-wallets, we accept it all.</b></h2>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={5}>
                        <div className='cake'>
                            <br />
                        </div>
                    </Grid>
                    <Grid item xs={0.5}>
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
                        <b><FacebookIcon sx={{ color: 'white' }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} /></b>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <b><TwitterIcon sx={{ color: 'white' }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} /></b>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <b><InstagramIcon sx={{ color: 'white' }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} /></b>
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
export default Tomato;
