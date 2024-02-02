import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import l1 from './image/l1.jpeg';
import l2 from './image/l2.jpeg';
import l3 from './image/l3.jpeg';
import l4 from './image/l4.jpeg';
import l5 from './image/l5.jpeg';
import l6 from './image/l6.jpeg';
import { FaPhoneAlt,FaFacebookF,FaTwitter,FaInstagram,FaEnvelope,FaLinkedinIn,FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer(){
    return(
        <div>
      {/* -start footer- */}
      <div class="container-fluid b-dark text-white-50 footer pt-5 mt-5">
        <Container className='py-5'>
          <Row className='g-5'>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Get In Touch</h5>
              <p class="mb-2"><i><FaLocationDot></FaLocationDot></i>123 Street, New York, USA</p>
              <p class="mb-2"><i><FaPhoneAlt></FaPhoneAlt></i>+012 345 67890</p>
              <p class="mb-2"><i><FaEnvelope></FaEnvelope></i>123 Street, New York, USA</p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social"><i><FaTwitter></FaTwitter></i></a>
                <a class="btn btn-outline-light btn-social"><i><FaFacebookF></FaFacebookF></i></a>
                <a class="btn btn-outline-light btn-social"><i><FaInstagram></FaInstagram></i></a>
                <a class="btn btn-outline-light btn-social"><i><FaLinkedinIn></FaLinkedinIn></i></a>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Quick Links</h5>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>About Us</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Contact Us</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Our Services</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Privacy Policy</a>
              <a class="btn btn-link text-white-50"><i><FaAngleRight></FaAngleRight></i>Terms & Conditions</a>
            </Col>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Photo Gallery</h5>
              <Row className='g-2 pt-2'>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l1}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l2}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l3}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l4}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l5}></img></Col>
                <Col xs={4}><img class="img-fluid rounded bg-light p-1" src={l6}></img></Col>
              </Row>
            </Col>
            <Col lg={3} md={6}>
              <h5 class="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div class="position-relative mx-auto w-4 lbl">
                <input class="t-w form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Youe Email"></input>
                <button type="button" class="h_btn btn-primary py-2 px-3 border-0 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container></Container>
      </div>
      {/* -start footer- */}
        </div>
    )
}
export default Footer;