import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SlCalender } from "react-icons/sl";
import {FaPhoneAlt} from "react-icons/fa";
import contact from './image/contact.jpeg';

function Contactarea(){
    return(
       <div>
          {/* -start contact- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='bg-light rounded p-3'>
            <div className='bg-light rounded p-4 brd'>
              <Row className='g-5 align-items-center'>
                <Col><img src={contact} className='img-fluid w-100 rounded'></img></Col>
                <Col lg={6}>
                  <div className='mb-4'>
                    <h1 className='mb-3 color-primary'>Contact With Our Certified Agent</h1>  
                    <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                  </div>  
                  <a className='h_btn btn-primary py-3 px-4 me-2'><i className='me-2'><FaPhoneAlt></FaPhoneAlt></i>Make A Call</a>
                  <a className='h_btn btn-dark py-3 px-4'><i className='me-2'><SlCalender></SlCalender></i>Get Appoinment</a>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* -start contact- */}
       </div> 
    )
}
export default Contactarea;