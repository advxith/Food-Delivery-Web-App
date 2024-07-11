import './App.css';
import { Grid, Button } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';

function FAQ() {
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
                        <h1 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', fontSize:50 }}><b>FAQs</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: How does Swiggy work?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy is an online food ordering and delivery platform. Customers can browse through restaurants listed on the app or website, select their preferred food items, place an order, and then track the delivery in real-time.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: What areas does Swiggy deliver to?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy operates in numerous cities and urban areas across the country. You can check the app or website to see if the service is available in your location.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: How long does it take for a Swiggy delivery?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Delivery times vary based on the distance between the restaurant and the delivery address, as well as other factors like traffic and order volume. Typically, Swiggy strives to deliver within an average of 30 to 45 minutes.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: Can I schedule orders in advance on Swiggy?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Yes, Swiggy allows users to schedule orders for later delivery. This feature is available on the app or website, enabling customers to select their preferred delivery time.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid> 
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: What payment methods does Swiggy accept?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy accepts various payment methods, including credit/debit cards, net banking, digital wallets, and cash on delivery.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: How can I contact Swiggy for support or assistance?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy provides customer support through its app, website, and a dedicated customer care helpline. Users can also reach out via email or through their social media channels for assistance.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: How are delivery charges calculated?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Delivery fees on Swiggy are influenced by various factors, including distance, demand, and any ongoing promotions. The app typically displays the delivery fee before confirming an order.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: Can I make special requests or modifications to my order?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy allows users to add special instructions for their orders. However, not all modifications may be feasible depending on the restaurant's policies.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: Are there any loyalty programs or discounts for regular customers?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy offers various promotions, discounts, and loyalty programs for its users. These can include referral bonuses, discounts on certain restaurants, and periodic offers.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b>Q: How does Swiggy ensure food safety and quality?</b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>A: Swiggy partners with restaurants that comply with food safety standards. Additionally, delivery executives are trained to handle food with care and maintain its quality during transit.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}><b></b></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}></p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
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
export default FAQ;