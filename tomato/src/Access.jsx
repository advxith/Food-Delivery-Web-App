import './App.css';
import { Grid, Button } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';


function Access() {
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
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={5}>
                        <h1 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center', fontSize: 35 }}><b>ACCESSIBILITY</b></h1>
                        <p style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center', fontSize:20}}>We strive to ensure that everyone, regardless of ability, can navigate, understand, and engage with our digital content. This page outlines our dedication to meeting web content accessibility guidelines, providing alternative text for images, ensuring compatibility with screen readers, and optimizing keyboard navigation. We are continuously working to enhance our website's accessibility, welcoming feedback to improve the user experience for all individuals. Our aim is to create an inclusive online space where everyone feels empowered to explore and utilize our services.</p>
                        <br />
                        <h1 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center', fontSize: 25}}><b>Cornerstones of Our Accessibility Commitment</b></h1>
                        <p style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center', fontSize:20}}><b>1. Inclusivity as a Core Value:</b> Ensuring accessibility is integral to our values, reflecting our commitment to serving all individuals regardless of their abilities or disabilities.</p>
                        <p style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center', fontSize:20}}><b>2. Compliance with Standards:</b> We prioritize adherence to web content accessibility guidelines, striving to meet and exceed industry standards to ensure a user-friendly experience for everyone.</p>
                        <p style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center', fontSize:20}}><b>3. Continuous Improvement:</b> We are dedicated to ongoing improvements, regularly updating and refining our website to enhance accessibility features and accommodate diverse user needs.</p>
                        <p style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center', fontSize:20}}><b>4. User Feedback and Engagement:</b> We actively seek and value user feedback, incorporating suggestions and insights to continually improve the accessibility and usability of our digital platforms.</p>
                        <p style={{ fontFamily: 'timesnewroman', textTransform: 'none', color: 'black', textAlign: 'center', fontSize:20}}><b>5. Empowering User Experience:</b> Our goal is to empower all visitors, ensuring they can easily access, navigate, and interact with our content, fostering a positive and seamless experience for everyone.</p>




                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={5}>
                        <br />
                        <br />
                        <div className='access1'>
                            <br />
                        </div>
                        <br />
                        <br />
                        <div className='access2'>
                            <br />
                        </div>
                    </Grid>
                    <Grid item xs={0.5}>

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
export default Access;