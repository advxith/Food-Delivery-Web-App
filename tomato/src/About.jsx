import './App.css';
import { Grid, Button } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';

function About() {
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
            <div className='about2'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center', fontSize: 130 }}><b>About Us</b></h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center', fontSize: 35, marginTop: -10 }}><b>Swiggy is the easiset way to get the food you love delivered to your doorstep.</b></h2>
                    </Grid>
                </Grid>
            </div>
            <div className='about3'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center' }}><b>Who Are We?</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center' }}><b>Swiggy is a technology company that connects people with the best food spots in their cities. We do this by empowering local restaurant business owners and in turn generate new ways for people to earn, work and live. We started by facilitating door-to-door delivery, but we see this as just the beginning of connecting people with the best restaurants for happpier days and easier evenings. </b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                </Grid>
            </div>
            <div className='about4'>
                <br />
            </div>
            <div className='about5'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center' }}><b>Dependable Delivery, Every Time...</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center' }}><b>Swiggy prides itself on unwavering reliability, ensuring every parcel reaches its destination as promised. Our commitment to consistency means you can trust us with your most time-sensitive deliveries. With a seamless blend of precision and dependability, we've built a reputation for being the reliable choice for all your delivery needs. Count on us for a service that goes beyond mere convenience – it's about the peace of mind that comes with knowing your package is in safe and dependable hands, every time.</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                </Grid>
            </div>
            <div className='about6'>
                <br />
            </div>
            <div className='about7'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center' }}><b>Want to be a part of our story?</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'white', textAlign: 'center' }}><b>Embark on an incredible journey with us! We're seeking exceptional individuals ready to join our mission and become integral parts of our journey. If you're eager to contribute to our story and be a driving force behind our collective vision, we're excited to engage with you. Let's explore how your unique skills and passion align with our goals. Together, let's script a compelling chapter in our shared jounrey. Come, be a vital part of our impactful story!!!</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
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
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={()=>navigate("/careers")}>Careers</Button>
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
export default About;