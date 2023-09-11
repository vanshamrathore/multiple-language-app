import React from 'react'
import './Contact.css';
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>{t('contact.subtitle')}</h2>
        <p className='contactpara'>{t('contact.content')}</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+916267484454");
          }}
        >{t('contact.connect')}</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        {t('footer')} <span>@{t('name')}</span></p>
      </Container>
    </div>
  )
}

export default Contact;