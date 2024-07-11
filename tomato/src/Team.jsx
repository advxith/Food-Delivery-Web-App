import './App.css';
import { Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';


function Team() {
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
            <div className='team1'>
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
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h1 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center', fontSize: 80 }}><b>Our leadership team</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center', fontSize: 35, marginTop: -15 }}><b>With over 100 years of combined experience, we've got a well seasoned team at the helm.</b></h2>
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
                        <Card sx={{ backgroundColor: 'black' }}>
                            <CardMedia>
                                <div className='exec1'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Mr. George Rashford</b></h2>
                                <h4 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Co-Founder and CEO</b></h4>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'black' }}>
                            <CardMedia>
                                <div className='exec2'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Mr. Rahul Mishra</b></h2>
                                <h4 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Co-Founder and CTO</b></h4>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ backgroundColor: 'black' }}>
                            <CardMedia>
                                <div className='exec3'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Mrs. Jennifer Lawerance</b></h2>
                                <h4 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Co-Founder and COO</b></h4>
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
            <div className='keyboard'>
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
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h1 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Come join our team and be a part of our incredible story</b></h1>
                        <h2 style={{ color: 'white', fontFamily: 'timesnewroman', textAlign: 'center' }}><b>Our team is the heartbeat of our company, their collective strengths composing the very essence of its success. Their dedication, skills, and passion intertwine to form the sturdy framework upon which this organization thrives. They are not merely individuals occupying roles but an ensemble of diverse talents working in harmony, each contributing a unique hue to the vibrant canvas of this company. Their commitment and collaborative spirit fortify the core, infusing it with innovation, resilience, and the dynamism needed to navigate the ever-evolving landscape of business. Like threads weaving through the fabric of a company, employees bind its present and future, embodying its vision and propelling it towards greater heights.</b></h2>
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
export default Team;