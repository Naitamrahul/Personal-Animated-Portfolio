import React, { useEffect, useRef } from 'react'
import pdf from '../component/pdf/Technical Trainer.pdf'
import profile from '../component/rahul1.jpg'
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: ["Welcome to my profile", "My name is Rahul Naitam", "I am Sr. Technical Trainer", "Fullstack Developer", "Android Developer", "React Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos="fade-up-right"
          data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>


        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left"
            data-aos-duration="1000">
            <img src={profile} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
