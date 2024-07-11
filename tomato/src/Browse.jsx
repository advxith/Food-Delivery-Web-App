import './App.css';
import { Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Browse() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate(); 
    return (
        <div>
            <div className="first">
                <Grid container>
                    <Grid item xs={1.5}>
                        <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white', textAlign: 'center' }}><b><RestaurantMenuIcon /> <a href='/home' style={{ color: 'white' }}>Swiggy</a></b></h2>
                    </Grid>
                    <Grid item xs={9}>
                        <br />
                    </Grid>
                    <Grid item xs={1.5}>
                        <h2 style={{ fontFamily: 'cursive', textTransform: 'none', color: 'white', textAlign: 'center' }}><b><Button variant='contained' sx={{textTransform:'none', fontFamily:'timesnewroman', backgroundColor:'yellow', color:'black', fontSize:15, borderRadius:90}} onClick={()=>navigate("/home")}><b>Home</b></Button></b></h2>
                    </Grid>
                </Grid>
            </div>
            <div className='fourth'>
                <Grid container>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h1 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Popular near you</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>

                    {/* first */}
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='mcd'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>McDonalds</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.5</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>20 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>200</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='aryas'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Aryas</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.2</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>10 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>200</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='pizzahut'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Pizza Hut</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.0</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>30 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>500</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>

                    {/* Second */}
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='gokul'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Gokul Ootupura</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.7</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>15 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>150</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='starbucks'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Starbucks</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.1</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>15 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>400</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='mings'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Mings Dumplings</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.3</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>20 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>150</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>

                    {/* Third */}

                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='coldstone'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Cold Stone Creamery</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.2</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>40 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>400</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='saravana'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Saravana Bhavan</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.1</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>25 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>150</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='subway'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Subway</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.2</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>10 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>200</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>

                    {/* fourth */}
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='burgerking'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Burger King</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.0</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>15 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>150</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='chaat'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Chaat Street</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.5</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>10 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>100</b> </h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <br />
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia>
                                <div className='keventers'>
                                    <br />
                                </div>
                            </CardMedia >
                            <CardContent>
                                <h3 style={{ color: 'black', fontFamily: 'timesnewroman' }}><b>Keventers Shake</b>       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} /></h3>
                                <h3 style={{ fontFamily: 'timesnewroman', color: 'black' }}><StarIcon /> <b>4.8</b> <ScheduleIcon sx={{ marginLeft: 2 }} /> <b>20 mins</b> <CurrencyRupeeIcon sx={{ marginLeft: 2 }} /><b>250</b> </h3>
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
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'center' }} onClick={()=>navigate("/about")}>About Us</Button>
                            <br />
                            <Button variant='text' sx={{ color: 'white', textTransform: 'none', textAlign: 'left', marginLeft: '-4px' }} onClick={() => navigate("/team")}>Team</Button>
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
                        <Button><b><FacebookIcon sx={{ color: 'white' }} onClick={() => navigate("/home")}/></b></Button>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <Button><b><TwitterIcon sx={{ color: 'white' }} onClick={() => navigate("/home")}/></b></Button>
                    </Grid>
                    <Grid item xs={1} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center' }}>
                        <Button><b><InstagramIcon sx={{ color: 'white' }} onClick={() => navigate("/home")}/></b></Button>
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
    )
}
export default Browse;