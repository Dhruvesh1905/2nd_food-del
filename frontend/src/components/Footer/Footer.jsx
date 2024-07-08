import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" width={100} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sapiente ex pariatur maiores molestiae inventore, labore ullam recusandae repellendus dicta.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-234-567-8910</li>
                    <li>contact@uniquebuddyfoodigo.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; UniqueBuddyFoodigo.com - All Right Reserved </p>
      
    </div>
  )
}

export default Footer
