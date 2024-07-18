import React from 'react';
import './style.css';
import appStore from '../../../assets/ios.png';
import google from '../../../assets/goole.png';
import abFoot from "../../../assets/abFoot.png"
import { FaFacebook,FaTwitter, FaInstagram,FaYoutube,FaWhatsapp,FaSkype } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footerBg'>
      <footer className="  py-10 text-white max-w-screen-xl mx-auto z-10" >
        <div className='grid grid-cols-3 gap-4'>
        <div>
       <h3 className='text-white font-semibold text-2xl uppercase pb-4'>About us</h3> 
    <img src={abFoot}/>
    <p className='pt-4 text-lg font-semibold'>A leading eCommerce website  <br/>
at Bangladesh</p>
        </div>
        <div>
      <h3 className='text-white font-semibold text-2xl uppercase pb-6'>SPECIAL</h3>
      <ul className='capitalize'>
        <li>flash sales</li>
        <li>todays sales</li>
        <li>top  sales</li>
        <li>profile</li>
      </ul>
        </div>
        <div>
      
          <h6 className="text-white font-semibold text-2xl uppercase pb-6">Customer care</h6> 
          <ul className='capitalize'>
        <li>How to buy</li>
        <li>Refund</li>
        <li>terms & Conditions</li>
        <li>cancelations polici</li>
      </ul>
        </div>
        </div>
        <div className='grid grid-cols-3 gap-4 pt-[30px]'>
          <div>
            <h2 className='font-semibold text-white pb-3'>follow us on</h2>
            <h3 className='flex gap-2 font-bold text-2xl'><span className='iconColor'><FaFacebook/></span><span className='iconColor'><FaTwitter/></span><span className='iconColor'><FaInstagram/></span> <span className='iconColor'><FaYoutube/></span><span className='iconColor'><FaWhatsapp/></span> <span className='iconColor'><FaSkype/></span></h3>
          </div>
          <div>
            <h3 className='font-semibold pb-3'>download the app now</h3>
            <div className='flex gap-3'>
            <img src={appStore} alt='appStore'/>
            <img src={google} alt='google'/>
            </div>
          
          </div>
          <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Subscribe to our new channel
to get latest updates</span>
      </label> 
      <div className="join subButton" >
      <input type="text" placeholder="username@site.com"  className="input input-bordered join-item bg-transparent text-white " /> 
        <button className="btn bg-[#fff] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bootomFoot">
  <aside>
    <p className='cursor-pointer text-white text-xl'>Copy write by  @appsbucket</p>
  </aside>
</footer>
      </div>
    );
};

export default Footer;