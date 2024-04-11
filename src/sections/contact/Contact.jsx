import './contact.css'
import { useRef, useState } from 'react';
import { IoMail } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form =useRef()
  const[submit,setSubmit]=useState(null)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_auqmgtg', 'template_iwwnie4', form.current, {
        publicKey: 'YCZH7yuGYlJobcsFv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmit("ThankYou I will get in Touch Soon")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <section id="contact">      
        <div className="container contact__container">
        <h5>You want to know more ?</h5>
       <small>Reach out to me !</small>
        <div className="contact__options">
         <article className="contact_option">
         <a href="mailto:ashu6530@gmail.com" target='_blank'><IoMail className='icon'/>ashu6530@gmail.com</a>
         <a href="https://wa.me/918637347997/?text=Hey%20there%20Ashutosh%20this%20side"target='_blank'><IoPhonePortrait className='icon'/>+91 8637347997</a>
         </article>
        </div>
        
        <div className='form__main-container'>
        <form ref={form} onSubmit={sendEmail} className='form__container'>
        <label htmlFor="" className='label'>Name</label>
        <input  type="text" name='name'  required />

        <label htmlFor=""  className='label'>Email</label>
        <input className='input' type="email"  name='email'/>

        <label htmlFor=""className='label'>Message</label>
        <textarea name="message" rows="10" required></textarea>
        <button  type='submit' className=' btn primary'>Send Message <IoMdSend /></button>
        <p className='submit'>{submit}</p>
       </form>
        </div>
        
        </div>
       
     
    </section>
  )
}

export default Contact