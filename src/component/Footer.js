import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin,BsYoutube} from 'react-icons/bs'
import {IoCall} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
const Footer = () => {
    return (
        <div>
            <section  >
                <div className='d-flex text-white p-5 flex-column flex-md-row  justify-content-between align-items-center' style={{  backgroundColor: 'red' }}>
                    <div className='' style={{widht:'100%'}}>
                        <img src='#' alt='' />
                        <p className='' style={{width:'86%'}}>
                            Get full medical assistance and consultation
                            for diseases Hassle-free experience throughout
                            your treatement
                        </p>
                    </div>
                    <div className='p-4' style={{widht:'100%'}}>
                        <p style={{fontWeight:'bold'}}>Quick Links</p>
                        <a href='#' className='text-decoration-none text-white' target='_blank'>
                            <p>Our Treatements</p>
                        </a>
                        <a href='#' className='text-decoration-none text-white' target='_blank'>
                            <p>Our Doctors</p>
                        </a>
                        <a href='#' className='text-decoration-none text-white' target='_blank'>
                            <p>Contact Us</p>
                        </a>
                        <a href='#' className='text-decoration-none text-white' target='_blank'>
                            <p>Terms & conditions</p>
                        </a>
                        <a href='#' className='text-decoration-none text-white' target='_blank'>
                            <p>Privacy</p>
                        </a>
                    </div>
                    <div className='p-4' style={{widht:'100%'}}>
                        <p style={{fontWeight:'bold'}}>Our Procedures</p>
                        <p>Lase Piles</p>
                        <p>Phimosis</p>
                        <p>Gynaecomastia</p>
                        <p>Gallstone</p>
                        <p>Online Consultation</p>
                    </div>
                    <div className='p-2' style={{widht:'100%'}}>
                        <p style={{fontWeight:'bold'}}>Follow Us</p>
                        <div className='d-flex my-3 justify-content-center gap-2 fs-3'>
                            <BsInstagram/>
                            <BsFacebook/>
                            <BsTwitter/>
                            <BsLinkedin/>
                            <BsYoutube/>
                        </div>
                        <p><span><IoCall/></span>180 0102 6601 | 080 4687 2700</p>
                        <p><span><MdEmail/></span>Burlycare@gmail.com</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer