import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import { BsExclamationTriangle } from "react-icons/bs";
function Ferror(){
    return(
        <div>
            <div className='container-xxl py-5'>
                <Container className='text-center'>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <i className='txt-primary display-1'><BsExclamationTriangle></BsExclamationTriangle></i>
                            <h1 className='display-1 h_one fw-bolder'>404</h1>
                            <h1 className='h_one mb-4'>Page Not Found</h1>
                            <p className='mb-4'>We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <a className='h_btn py-3 px-5'>Go Back To Home</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Ferror;