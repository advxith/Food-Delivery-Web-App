import './App.css';
import { Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';

function City() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
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
                        <h1 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center' }}>Our Reach: Served Cities and Beyond</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='delhi'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Delhi</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(New Delhi)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='mumbai'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Mumbai</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Maharashtra)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='kolkata'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Kolkata</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(West Bengal)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5 }>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='kochi'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Kochi</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Kerala)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='varanasi'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Varanasi</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Uttar Pradesh)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='chennai'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Chennai</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Tamil Nadu)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5 }>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='ggn'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Gurgaon</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Haryana)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='pune'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Pune</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Maharashtra)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='blore'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Bangalore</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Karnataka)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5 }>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='hyd'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Hyderabad</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Telangana)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='jaipur'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Jaipur</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Rajasthan)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'white' }}>
                            <CardMedia>
                                <div className='ahm'>
                                    <br />
                                </div>
                            </CardMedia>
                            <CardContent>
                                <h2 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Ahmedabad</b></h2>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', marginTop: -10 }}><b>(Gujarat)</b></h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5 }>
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
export default City;