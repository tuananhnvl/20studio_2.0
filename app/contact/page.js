import React from 'react'
import '../styles/contact.css'
export default function contact() {
  return (
    <section>
        <div className='aboutus_slogan'>
            <h2>LET'S WORK</h2>
            <h3>TOGETHER</h3>
        </div>
        <div className='aboutus_form'>
            <div className='form'>
                <h3>CONTACT</h3>
                <input  placeholder='Full Name' />
                <input placeholder='Email' />
                <input placeholder='Subject' />
                <textarea placeholder='How can we helps' />
                <button className='btn-from-send'>Send Enquyri</button>
            </div>
            <div className='img'>
                {/* <Image src='/img/contact-form.jpg' alt='' width={200} height={300} /> */}
            </div>
        </div>
        <div className='aboutus_qoute'>
            <div className='mask-dot'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
            <div className='content'>
                <p>Or, you can contact one of our studios directly below. We aim to respond within 24 hours.</p>
            </div>
            
        </div>
    </section>
  )
}
