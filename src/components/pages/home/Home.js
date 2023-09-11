import React from 'react'
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Text from './Text';
function Home() {
  const { t } = useTranslation();
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>{t('hello')}  <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>{t('intro')}</h2>
            <span></span>
            <Text/>
            <button onClick={() => {
              window.open("https://github.com");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
          <div className='img-border'>
          <div className="imagedeveloper">
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home