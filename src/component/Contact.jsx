import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a href='www.google.com' target='_blank' className="items"><FaInstagramSquare className='icons' /></a>
          <a href='www.facebook.com' target='_blank' className="items"><FaFacebook className='icons' /></a>
          <a href='www.linkedin.com' target='_blank' className="items"><FaLinkedinIn className='icons' /></a>
          <a href='www.twitter.com' target='_blank' className="items"><BsTwitterX className='icons' /></a>
          <a href='www.github.com' target='_blank' className="items"><FaGithubSquare className='icons' /></a>
          <a href='mailto:rahulnaitam1992@gmail.com' target='_blank' className="items"><SiGmail className='icons' /></a>
        </div>
      </div>
    </>
  )
}

export default Contact
