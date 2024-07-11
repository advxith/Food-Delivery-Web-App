import './App.css';
import { Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';


function Career() {
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

            <div className='career1'>
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
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'timesnewroman', fontSize: 50 }}><b> Transforming cities, Changing lives</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ color: 'white', textAlign: 'center', fontFamily: 'timesnewroman' }}><b>At Swiggy, we are always on the lookout for people who believes in putting consumers above everyone and everything else, while envisioning growth and pursuing excellence for the years to come. Sounds like you?</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                </Grid>
            </div>

            <div className='fourth'>
                <Grid container>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='techcareer'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Tech and Engineering</b></h3>
                                <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white' }}><b><Button variant='outlined' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', color: 'green', borderColor: 'green' }} onClick={() => navigate("/careers")}><b>Explore Oppurtunities</b></Button></b></h2>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='productcareer'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Product and Design</b></h3>
                                <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white' }}><b><Button variant='outlined' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', color: 'green', borderColor: 'green' }} onClick={() => navigate("/careers")}><b>Explore Oppurtunities</b></Button></b></h2>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='datacareer'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Data and Analytics</b></h3>
                                <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white' }}><b><Button variant='outlined' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', color: 'green', borderColor: 'green' }} onClick={() => navigate("/careers")}><b>Explore Oppurtunities</b></Button></b></h2>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5}>
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
                        <Card>
                            <CardMedia>
                                <div className='brandcareer'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Brand and Marketing</b></h3>
                                <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white' }}><b><Button variant='outlined' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', color: 'green', borderColor: 'green' }} onClick={() => navigate("/careers")}><b>Explore Oppurtunities</b></Button></b></h2>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='contentcareer'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Content and Editorials</b></h3>
                                <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white' }}><b><Button variant='outlined' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', color: 'green', borderColor: 'green' }} onClick={() => navigate("/careers")}><b>Explore Oppurtunities</b></Button></b></h2>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='legalcareer'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Legal and Finances</b></h3>
                                <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white' }}><b><Button variant='outlined' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', color: 'green', borderColor: 'green' }} onClick={() => navigate("/careers")}><b>Explore Oppurtunities</b></Button></b></h2>
                            </CardContent>
                        </Card>
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
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }}  onClick={() => navigate("/accessibility")}>Accessibility</Button>
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
        </div>
    );
}
export default Career;