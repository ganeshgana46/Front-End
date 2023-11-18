import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai"
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Contact = () => {
  return (
    <>
      <Meta title={'contact Us'} />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15538.975095637292!2d80.10935624999999!3d13.178548750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289f3c89fd863%3A0x3c95d01e643e23f1!2sVel%20Tech%20High%20Tech%20Dr.Rangarajan%20Dr.Sakunthala%20Engineering%20College%20(Autonomous)!5e0!3m2!1sen!2sin!4v1699181446692!5m2!1sen!2sin"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input
                        type='tel'
                        className='form-control'
                        placeholder='Mobile Number'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols='30'
                        rows='10'
                        placeholder='Comment'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome />
                        <address className='mb-0'>
                          Hno:277 , Near Village chopal , Mandaura, Sonipat,
                          Harayana
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall />
                        <a href='tel:+91 8296096782'>+91 8296096782</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineInfoCircle />
                        <a href='mailto:pallamganesh213@gmail.com'>pallamganesh213@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle />
                        <p className='mb-0'> Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact