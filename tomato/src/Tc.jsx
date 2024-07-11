import './App.css';
import { Grid, Button } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useEffect } from 'react';


function TC() {
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
                        <h1 style={{ color: 'black', fontFamily: 'timesnewroman', textAlign: 'center', fontSize:50 }}><b>Terms and Conditions</b></h1>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of www.Swiggy.com website and Swiggy application for mobile and handheld devices.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:40 }}><b>Terms of Use</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>These terms of use (the " Terms of Use") govern your use of our website www.Swiggy.com (the " Website") and our "Swiggy" application for mobile and handheld devices (the " App"). The Website and the App are jointly referred to as the " Platform". Please read these Terms of Use carefully before you use the services. If you do not agree to these Terms of Use, you may not use the services on the Platform, and we request you to uninstall the App. By installing, downloading or even merely using the Platform, you shall be contracting with Swiggy and you signify your acceptance to the Terms of Use and other Swiggy policies (including but not limited to the Cancellation & Refund Policy, Privacy Policy and Take Down Policy) as posted on the Platform from time to time, which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.</p>
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
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>Swiggy enables transactions between participant restaurants/merchants and buyers, dealing in prepared food and beverages (" Platform Services"). The buyers (" Buyer/s") can choose and place orders (" Orders") from variety of products listed and offered for sale by various neighbourhood merchants including but not limited to the restaurants and eateries (" Merchant/s"), on the Platform and Swiggy enables delivery of such orders at select localities of serviceable cities across India (" Delivery Services"). The Platform Services and Delivery Services are collectively referred to as " Services". For the delivery services rendered, Swiggy may charge you delivery fee (inclusive of applicable taxes whenever not expressly mentioned).</p>
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
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>All commercial/contractual terms are offered by and agreed to between Buyers and Merchants alone. The commercial/contractual terms include without limitation price, taxes, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after sales services related to products and services. Swiggy does not have any control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Buyers and Merchants. Swiggy may, however, offer support services to Merchants in respect to order fulfilment, payment collection, call centre, and other services, pursuant to independent contracts executed by it with the Merchants. Swiggy does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc.) of any of the Merchants. You are advised to independently verify the bona fides of any particular Merchant that you choose to deal with on the Platform and use your best judgment in that behalf. All Merchant offers and third party offers are subject to respective party terms and conditions. Swiggy takes no responsibility for such offers.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:40 }}><b>Ammenments</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>These Terms of Use are subject to modifications at any time. We reserve the right to modify or change these Terms of Use and other Swiggy policies at any time by posting changes on the Platform, and you shall be liable to update yourself of such changes, if any, by accessing the changes on the Platform. You shall, at all times, be responsible for regularly reviewing the Terms of Use and the other Swiggy policies and note the changes made on the Platform. Your continued usage of the services after any change is posted constitutes your acceptance of the amended Terms of Use and other Swiggy policies. As long as you comply with these Terms of Use, Swiggy grants you a personal, non-exclusive, non-transferable, limited privilege to access, enter, and use the Platform. By accepting these Terms of Use, you also accept and agree to be bound by the other terms and conditions and Swiggy policies (including but not limited to Cancellation & Refund Policy, Privacy Policy and Notice and Take Down Policy) as may be posted on the Platform from time to time.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:40 }}><b>Use of Platform and Services</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>All commercial/contractual terms are offered by and agreed to between Buyers and Merchants alone. The commercial/contractual terms include without limitation price, taxes, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services and after sales services related to products and services. Swiggy does not have any control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Buyers and Merchants. Swiggy may, however, offer support services to Merchants in respect to order fulfilment, payment collection, call centre, and other services, pursuant to independent contracts executed by it with the Merchants. Swiggy does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc.) of any of the Merchants. You are advised to independently verify the bona fides of any particular Merchant that you choose to deal with on the Platform and use your best judgment in that behalf. All Merchant offers and third party offers are subject to respective party terms and conditions. Swiggy takes no responsibility for such offers. Swiggy neither make any representation or warranty as to specifics (such as quality, value, salability, etc.) of the products or services proposed to be sold or offered to be sold or purchased on the Platform nor does implicitly or explicitly support or endorse the sale or purchase of any products or services on the Platform. Swiggy accepts no liability for any errors or omissions, whether on behalf of itself or third parties. Swiggy is not responsible for any non-performance or breach of any contract entered into between Buyers and Merchants on the Platform. Swiggy cannot and does not guarantee that the concerned Buyers and/or Merchants will perform any transaction concluded on the Platform. Swiggy is not responsible for unsatisfactory or non-performance of services or damages or delays as a result of products which are out of stock, unavailable or back ordered. Swiggy is operating an online marketplace and assumes the role of facilitator, and does not at any point of time during any transaction between Buyer and Merchant on the Platform come into or take possession of any of the products or services offered by Merchant. At no time shall Swiggy hold any right, title or interest over the products nor shall Swiggy have any obligations or liabilities in respect of such contract entered into between Buyer and Merchant. Swiggy is only providing a platform for communication and it is agreed that the contract for sale of any of the products or services shall be a strictly bipartite contract between the Merchant and the Buyer. In case of complaints from the Buyer pertaining to food efficacy, quality, or any other such issues, Swiggy shall notify the same to Merchant and shall also redirect the Buyer to the consumer call center of the Merchant. The Merchant shall be liable for redressing Buyer complaints. In the event you raise any complaint on any Merchant accessed using our Platform, we shall assist you to the best of our abilities by providing relevant information to you, such as details of the Merchant and the specific Order to which the complaint relates, to enable satisfactory resolution of the complaint.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:40 }}><b>Bookings and Financial Terms</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>The Platform allows you to place food order bookings and we will, subject to the terms and conditions set out herein, enable delivery of such order to you. Swiggy does not own, sell, resell on its own and/or do not control the Merchants or the related services provided in connection thereof. You understand that any order that you place shall be subject to the terms and conditions set out in these Terms of Use including, but not limited to, product availability and delivery location serviceability. As a general rule, all food orders placed on the Platform are treated as confirmed. However, upon your successful completion of booking an order, we may call you on the telephone or mobile number provided to confirm the details of the order, the price to be paid, and the estimated delivery time. For this purpose, you will be required to share certain information with us, including but not limited to (i) your first and last name (ii) mobile number; and (iii) email address. It shall be your sole responsibility to bring any incorrect details to our attention.</p>
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
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>In addition to the foregoing, we may also contact you by phone and/or email to inform and confirm any change in the order, due to availability or unavailability or change in price of the order as informed by the Merchant. Please note change or confirmation of the order shall be treated as final. It is clarified that Swiggy reserves the right to not process your order in the event you are unavailable on the phone at the time we call you for confirming the order and in such an event, the provisions of the cancellation and refund policy below shall be applicable. All payments made against the purchases/services on the Platform by you shall be compulsorily in Indian Rupees acceptable in the Republic of India. The Platform will not facilitate transactions with respect to any other form of currency concerning the purchases made on the Platform. You can pay by (i) credit card or debit card or net banking; (ii) any other RBI approved payment method at the time of booking an order; or (iii) credit or debit card or cash at the time of delivery. You understand, accept, and agree that the payment facility provided by Swiggy is neither a banking nor financial service but is merely a facilitator providing an electronic, automated online electronic payment, receiving payment on delivery, collection, and remittance facility for the transactions on the Platform using the existing authorized banking infrastructure and credit card payment gateway networks. Further, by providing a payment facility, Swiggy is neither acting as trustees nor acting in a fiduciary capacity with respect to the transaction or the transaction price. You acknowledge and agree that we act as the Merchant's payment agent for the limited purpose of accepting payments from you on behalf of the Merchant. Upon your payment of amounts to us, which are due to the Merchant, your payment obligation to the Merchant for such amounts is completed, and we are responsible for remitting such amounts to the Merchant. You shall not, under any circumstances whatsoever, make any payment directly to the Merchant for Order bookings made using the Platform.</p>
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
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>The final tax bill will be issued by the Merchant to the Buyer along with the order and Swiggy is merely collecting the payment on behalf of such Merchant. All applicable taxes and levies, the rates thereof, and the manner of applicability of such taxes on the bill are being charged and determined by the Merchant. Swiggy holds no responsibility for the legal correctness/validity of the levy of such taxes. The sole responsibility for any legal issue arising on the taxes shall reside with the Merchant. The prices reflected on the Platform, including packaging or handling charges, are determined solely by the Merchant and are listed based on Merchant's information. Very rarely, prices may change at the time of placing order due to Merchant changing the menu price without due intimation and such change of price is at the sole discretion of the Merchant, attributing to various factors beyond control. Disclaimer: Prices on any product(s) as is reflected on the Platform may, due to some technical issue, typographical error, or product information supplied by Merchant, be incorrectly reflected and in such an event Merchant may cancel such your order(s). The Merchant shall be solely responsible for any warranty/guarantee of the food products sold to the Buyers and in no event shall be the responsibility of Swiggy. The transaction is bilateral between the Merchant and Buyer and therefore, Swiggy is not liable to charge or deposit any taxes applicable on such transaction.</p>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={11}>
                        <h2 style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:40 }}><b>Cancellations and Refunds</b></h2>
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid>
                    <Grid item xs={0.5}>
                        <br />
                    </Grid> 
                    <Grid item xs={11}>
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>As a general rule, you shall not be entitled to cancel your order once you have received confirmation of the same. If you cancel your order after it has been confirmed, Swiggy shall have the right to charge you a cancellation fee of a minimum INR 75 up to the order value (inclusive of applicable taxes), with the right to either not refund the order value or recover from your subsequent order the complete/deficit cancellation fee, as applicable, to compensate our restaurant and delivery partners. Swiggy shall also have the right to charge you a cancellation fee for the orders canceled by Swiggy for the reasons specified under clause 1(iii) of this cancellation and refunds policy. In case of cancellations for the reasons attributable to Swiggy or its restaurant and delivery partners, Swiggy shall not charge you any cancellation fee. However, in the unlikely event of an item on your order being unavailable, we will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event, you will be entitled to cancel the entire order and shall be entitled to a refund in accordance with our refund policy.</p>
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
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>We reserve the sole right to cancel your order in the following circumstances: in the event the designated address falls outside the delivery zone offered by us; failure to contact you by phone or email at the time of confirming the order booking; failure to deliver your order due to lack of information, direction, or authorization from you at the time of delivery; or unavailability of all the items ordered by you at the time of booking the order; or unavailability of all the items ordered by you at the time of booking the order.</p>
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
                        <p style={{ color: 'black', fontFamily: 'timesnewroman', fontSize:20, marginTop:-10 }}>You shall be entitled to a refund only if you pre-pay for your order at the time of placing your order on the Platform and only in the event of any of the following circumstances: your order packaging has been tampered or damaged at the time of delivery; us canceling your order due to (A) your delivery location falling outside our designated delivery zones; (B) failure to contact you by phone or email at the time of confirming the order booking; or (C) failure to contact you by phone or email at the time of confirming the order booking; or you canceling the order at the time of confirmation due to unavailability of the items you ordered for at the time of booking. Our decision on refunds shall be at our sole discretion and shall be final and binding. All refund amounts shall be credited to your account within 3-4 business days in accordance with the terms that may be stipulated by the bank which has issued the credit/debit card. In case of payment at the time of delivery, you will not be required to pay for: orders where the packaging has been tampered or damaged by us; wrong order being delivered; or items missing from your order at the time of delivery.</p>
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
export default TC;