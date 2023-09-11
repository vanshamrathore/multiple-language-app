import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>{t('about.title')}</h3>
                        <p className='aboutdetails'>{t('about.content')}</p>
                            <Row>
                                <h3>{t('skills')}</h3>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                            </Row>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;