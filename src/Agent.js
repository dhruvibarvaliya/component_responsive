import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import a1 from './image/a1.jpeg';
import a2 from './image/a2.jpeg';
import a3 from './image/a3.jpeg';
import a4 from './image/a4.jpeg';
import { FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";

function Agent(){
    return(
        <div>
             {/* -start agent- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='text-center mx-auto mb-5 m-w'>
            <h1 className='mb-3 color-primary'>Property Agents</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <Row className='g-4'>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a1} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a2} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a3} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item rounded overflow-hidden'>
                <div className='position-relative'>
                  <img src={a4} className='img-fluid'></img>
                  <div className='position-absolute start-50 top-100 translate-middle d-flex align-items-center'>
                    <a className='a_btn btn-square mx-1'><i><FaFacebookF></FaFacebookF></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaTwitter></FaTwitter></i></a>
                    <a className='a_btn btn-square mx-1'><i><FaInstagram></FaInstagram></i></a>
                  </div>
                </div>
                <div className='text-center p-4 mt-3'>
                  <h5 className='fw-bold mb-0 color-primary'>Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -start agent- */}
        </div>
    )
}
export default Agent;