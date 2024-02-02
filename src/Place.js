import './App.css';
import { FaCheck} from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import about from './image/about.jpeg';

function Place(){
    return(
        <div>
              {/* -start place- */}
      <div className='container-xxl py-5'>
        <Container>
          <Row className='g-5 align-items-center'>
            <Col lg={6}>
              <div className='about-img position-relative overflow-hidden p-5 pe-0'><img src={about} className='img-fluid w-100'></img></div>
            </Col>
            <Col lg={6}>
              <h1 className='mb-4 h_one'>#1 Place To Find The Perfect Property</h1>
              <p className='mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p><i className='text-blue me-3'><FaCheck></FaCheck></i>Tempor erat elitr rebum at clita</p>
              <p><i className='text-blue me-3'><FaCheck></FaCheck></i>Aliqu diam amet diam et eos</p>
              <p><i className='text-blue me-3'><FaCheck></FaCheck></i>Clita duo justo magna dolore erat amet</p>
              <a className='h_btn btn-primary py-3 px-5 mt-3'>Read More</a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -start place- */}
        </div>
    )
}
export default Place;