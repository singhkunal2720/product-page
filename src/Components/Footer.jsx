'use client';

import { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import gPayImg from '../assets/gpay.png';
import amexImg from '../assets/amex.png';
import applePayImg from '../assets/apple-pay.png';
import mastercardImg from '../assets/master-card.png';
import lastPay from '../assets/last-pay.png';
import payPalImg from '../assets/paypal.png';
import Accordion from './Accordian';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="newsletter">
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                <div className="contact-info">
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>

                    <h4 style={{ marginTop: '20px' }}>CURRENCY</h4>
                    <p>🇺🇸 USD</p>
                    <small>
                        Transactions will be completed in Euros and a currency reference is available on hover.
                    </small>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-links">
                {isMobile ? (
                    <>
                        <Accordion title="mettā muse">
                            <p>About Us</p>
                            <p>Stories</p>
                            <p>Artisans</p>
                            <p>Boutiques</p>
                            <p>Contact Us</p>
                            <p>EU Compliances Docs</p>
                        </Accordion>

                        <Accordion title="QUICK LINKS">
                            <p>Orders & Shipping</p>
                            <p>Join/Login as a Seller</p>
                            <p>Payment & Pricing</p>
                            <p>Return & Refunds</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </Accordion>

                        <Accordion title="FOLLOW US">
                            <div className="footer-icons">
                                <Instagram size={20} />
                                <Linkedin size={20} />
                            </div>
                        </Accordion>

                        <br />
                        <h4>mettā muse ACCEPTS</h4>
                        <div className="payment-icons">
                            <Image src={gPayImg} alt="GPay" />
                            <Image src={mastercardImg} alt="MasterCard" />
                            <Image src={payPalImg} alt="paypal" />
                            <Image src={amexImg} alt="Amex" />
                            <Image src={applePayImg} alt="ApplePay" />
                            <Image src={lastPay} alt="PayPal" />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h4>mettā muse</h4>
                            <p>About Us</p>
                            <p>Stories</p>
                            <p>Artisans</p>
                            <p>Boutiques</p>
                            <p>Contact Us</p>
                            <p>EU Compliances Docs</p>
                        </div>

                        <div>
                            <h4>QUICK LINKS</h4>
                            <p>Orders & Shipping</p>
                            <p>Join/Login as a Seller</p>
                            <p>Payment & Pricing</p>
                            <p>Return & Refunds</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>

                        <div>
                            <h4>FOLLOW US</h4>
                            <div className="footer-icons">
                                <Instagram size={20} />
                                <Linkedin size={20} />
                            </div>
                            <br />
                            <h4>mettā muse ACCEPTS</h4>
                            <div className="payment-icons">
                                <Image src={gPayImg} alt="GPay" />
                                <Image src={mastercardImg} alt="MasterCard" />
                                <Image src={payPalImg} alt="paypal" />
                                <Image src={amexImg} alt="Amex" />
                                <Image src={applePayImg} alt="ApplePay" />
                                <Image src={lastPay} alt="PayPal" />
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="footer-bottom">
                <p>Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
