import './App.css';
import l1 from './image/l1.jpeg';
import l2 from './image/l2.jpeg';
import l3 from './image/l3.jpeg';
import l4 from './image/l4.jpeg';
import l5 from './image/l5.jpeg';
import l6 from './image/l6.jpeg';
import { FaRulerCombined,FaBed,FaBath} from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";

function List(){
    return(
        <div>
              {/* -start list- */}
      <div className='container-xxl py-5'>
        <Container>
          <Row className='g-0 gx-5 align-items-end'>
            <Col lg={6}>
              <div className='text-start mx-auto mb-5'>
                <h1 className='mb-3 color-primary'>Property Listing</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
              </div>
            </Col>
            <Col lg={6} className='text-start text-lg-end'>
                <ul className='nav nav-pills d-inline-flex justify-content-end mb-5'>
                  <li className='nav-item me-2'><a className='h_btn py-1 px-2 btn-outline-primary active'>Featured</a></li>
                  <li className='nav-item me-2'><a className='btn py-1 px-2 btn-outline-primary'>For Sell</a></li>
                  <li className='nav-item me-0'><a className='btn py-1 px-2 btn-outline-primary'>For Rent</a></li>
                </ul>
            </Col>
          </Row>
          <div className='tab-cnt'>
            <div className='tab-pane p-0'>
              <Row className='g-4'>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l1} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l2} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l3} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l4} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l5} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className='property-item rounded overflow-hidden'>
                      <div className='position-relative overflow-hidden'>
                        <a className='zoom'><img src={l6} className='img-fluid'></img></a>
                        <div className='bg-blue rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>For Sell</div>
                        <div className='bg-white rounded-top txt-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>Appartment</div>
                      </div>
                      <div className='p-4 pb-0'>
                        <h5 className='txt-primary mb-3'>$12,345</h5>
                        <a className='d-block h5 mb-2 color-primary cnt'>Golden Urban House For Sell</a>
                        <p>
                          <i className='txt-primary me-2'><FaLocationDot></FaLocationDot></i>
                          123 Street, New York, USA
                        </p>
                      </div>
                      <div className='d-flex border-top'>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaRulerCombined></FaRulerCombined></i>
                          1000 Sqft
                        </small>
                        <small className='flex-fill text-center border-end py-2'>
                          <i className='txt-primary me-2'><FaBed></FaBed></i>
                          3 Bed
                        </small>
                        <small className='flex-fill text-center py-2'>
                          <i className='txt-primary me-2'><FaBath></FaBath></i>
                          2 Bath
                        </small>
                      </div>
                    </div>
                </Col>
                <Col className='text-center'>
                  <a className='h_btn btn-primary py-3 px-5'>Browse More Property</a>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* -start list- */}
        </div>
    )
}
export default List;