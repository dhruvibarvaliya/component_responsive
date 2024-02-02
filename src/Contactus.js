import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt,FaEnvelope} from "react-icons/fa";


function Contactus(){
    return(
        <div>
            <div className='container-xxl py-5'>
                <Container>
                    <div className='text-center mx-auto mb-5'>
                        <h1 className='mb-3 h_one'>Contact Us</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <Row className='g-4'>
                        <Col>
                            <Row className='g-4'>
                                <Col md={6} lg={4}>
                                    <div className='bg-light rounded p-3'>
                                        <div className='d-flex align-items-center bg-white rounded p-3'>
                                            <div className='z_icon me-3'><i className='txt-primary'><FaLocationDot></FaLocationDot></i></div>
                                            <span>123 Street, New York, USA</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} lg={4}>
                                    <div className='bg-light rounded p-3'>
                                        <div className='d-flex align-items-center bg-white rounded p-3'>
                                            <div className='z_icon me-3'><i className='txt-primary'><FaEnvelope></FaEnvelope></i></div>
                                            <span>mail@domain.com</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} lg={4}>
                                    <div className='bg-light rounded p-3'>
                                        <div className='d-flex align-items-center bg-white rounded p-3'>
                                            <div className='z_icon me-3'><i className='txt-primary'><FaPhoneAlt></FaPhoneAlt></i></div>
                                            <span>+012 345 6789</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Row className='mt-4'>
                        <Col md={6} xs={12}>
                            <iframe  className="position-relative rounded w-100 h-100" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"></iframe>
                        </Col>
                        <Col md={6}>
                            <div>
                                <p className='mb-4'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className='txt-primary'>Download Now</a>.</p>
                                <form>
                                    <Row>
                                        <Col md={6} className='mt-2'>
                                            <div className="form-floating">
                                                <input type="text" class="form-control" placeholder="Your Name"></input>
                                                <label for="name">Your Name</label>
                                            </div>
                                        </Col>
                                        <Col md={6} className='mt-2'>
                                            <div className="form-floating">
                                                <input type="email" class="form-control"  placeholder="Your Email"></input>
                                                <label for="email">Your email</label>

                                            </div>
                                        </Col>
                                        <Col xs={12} className='mt-3'>
                                            <div className="form-floating">
                                                <input type="text" class="form-control"  placeholder="Subject"></input>
                                                <label for="Subject"> Subject</label>

                                            </div>
                                        </Col>
                                        <Col xs={12} className='mt-3'>
                                            <div className="form-floating">
                                                <textarea type="text" class="form-control m_h"  placeholder="Leave a message here"></textarea>
                                                <label for="message"> Message</label>

                                            </div>
                                        </Col>
                                        <Col xs={12} className='mt-3'>
                                            <button className='h_btn py-3 w-100 border-0'>Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Contactus;