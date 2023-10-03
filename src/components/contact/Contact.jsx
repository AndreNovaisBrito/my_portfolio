import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>novaisandre.dev@gmail.com</h5>
            <a href="mailto:novaisandre.dev@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>85 988963320</h5>
            <a href="https://wa.me/5585988963320" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact