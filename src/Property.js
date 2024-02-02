import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from './image/p1.png';
import p2 from './image/p2.png';
import p3 from './image/p3.png';
import p4 from './image/p4.png';
import p5 from './image/p5.png';
import p6 from './image/p6.png';
import p7 from './image/p7.png';
import p8 from './image/p8.png';
function Property(){
    return(
        <div>
              {/* -start property- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='text-center mx-auto mb-5 title'>
            <h1 className='mb-3'>Property Types</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <Row className='g-4'>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p1} className='img-fluid'></img></div>
                <h6>Apartment</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p2} className='img-fluid'></img></div>
                <h6>Villa</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p3} className='img-fluid'></img></div>
                <h6>Home</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p4} className='img-fluid'></img></div>
                <h6>Office</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p5} className='img-fluid'></img></div>
                <h6>Building</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p6} className='img-fluid'></img></div>
                <h6>Townhouse</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p7} className='img-fluid'></img></div>
                <h6>Shop</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
            <Col lg={3} sm={6} >
            <a className='cat-item d-block bg-light text-center rounded p-3'>
              <div className='rounded p-4'>
                <div className='icon mb-3'><img src={p8} className='img-fluid'></img></div>
                <h6>Garage</h6>
                <span>123 Properties</span>
              </div>
            </a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -start property- */}
        </div>
    )
}
export default Property;