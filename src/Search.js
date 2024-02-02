import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function Search(){
    return(
       <div>
           {/* -start search- */}
      <div className='bgblue mb-5'>
        <Container>
          <Row className='g-2'>
            <Col md={10}>
              <Row className='g-2'>
                <Col md={4}><input type='text' className='form-control border-0 py-3' placeholder='Search Keyword'></input></Col>
                <Col md={4}>
                  <select className='form-select border-0 py-3'>
                      <option selected>Property Type</option>
                      <option value="1">Property Type 1</option>
                      <option value="2">Property Type 2</option>
                      <option value="3">Property Type 3</option>
                  </select>
                </Col>
                <Col md={4}>
                  <select className='form-select border-0 py-3'>
                      <option selected>Location</option>
                      <option value="1">Location 1</option>
                      <option value="2">Location 2</option>
                      <option value="3">Location 3</option>
                  </select>
                </Col>
              </Row>
            </Col>
            <Col md={2}><button className='h_btn border-0 btn-dark w-100 py-3'>Search</button></Col>
          </Row>
        </Container>
      </div>
      {/* -start search- */}
       </div> 
    )
}
export default Search;