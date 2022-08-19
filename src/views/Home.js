import ArticleAlternateComponent from 'components/Articles/ArticleAlternateComponent'
import ArticleComponent from 'components/Articles/ArticleComponent'
import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import Predator from '../assets/logo/logo.png'

const Home = (props) => {
  return (
    <Row className="mx-0">
      <Col className="px-0" lg={12} xs={12}>
        <div className='header-bg d-none d-lg-flex'></div>
        <div className='header-bg-mobile d-lg-none d-sm-flex'></div>
        <section className='header-content d-flex justify-content-center'>
          <div className='w-50 d-none d-lg-flex align-items-center'>
            <div className="header-hexagon mr-5">
              <img src={Predator} alt="company logo" />
            </div>
            <div className>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <Button>Get Started</Button>
            </div>
          </div>
          <div className='w-50 d-lg-none d-sm-flex flex-column align-items-center'>
            <div className="header-hexagon d-flex justify-content-center w-100">
              <img src={Predator} alt="company logo" />
            </div>
            <div className="d-flex flex-column justify-content-center w-100">
              <h5 className="text-center">Lorem ipsum dolor sit amet.</h5>
              <Button>Get Started</Button>
            </div>
          </div>
        </section>
      </Col>
      <Col lg={12} xs={12}>
        <ArticleComponent/>
        <hr />
      </Col>
      <Col lg={12} xs={12}>
        <ArticleAlternateComponent/>
        <hr />
      </Col>
      <Col lg={12} xs={12}>
        <ArticleComponent/>
        <hr />
      </Col>
      <Col lg={12} xs={12}>
        <ArticleAlternateComponent/>
        <hr />
      </Col>
    </Row>
  )
}

export default Home