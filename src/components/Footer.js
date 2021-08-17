import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const Footer = () => {
    return (
        <div className='cs-footer'>
            <Box>
                <div className="copyright-info">CodingSparkles © {new Date().getFullYear()}. All rights reserved.</div>
                <div className="about-page">About</div>
                <div className="contact-page">Contact</div>
                <div className="privacy-page">Privacy Policy</div>
            </Box>
            <Box>
                <Link to={"www.facebook.com"} target="_blank">
                    <FacebookIcon />
                </Link>
                <Link to={"www.instagram.com"} target="_blank">
                    <InstagramIcon />
                </Link>
                <Link to={"www.twitter.com"} target="_blank">
                    <TwitterIcon />
                </Link>
            </Box>
        </div>
    )
}

export default Footer;