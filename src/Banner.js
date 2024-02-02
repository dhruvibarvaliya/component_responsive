import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import b1 from './image/b1.jpeg';
import b2 from './image/b2.jpeg';
const option={
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:1,
      },
      1000:{
        items:1,
      }
    }
  }
function Banner(){
    return(
        <div>
       {/* -start banner- */}
      <div className='header p-0'>
        <Row className='g-0 align-item flex-column-reverse flex-md-row'>
          <Col md={6} className='mt-lg-5'>
            <Container>
            <h1 className='display-5 pt-5 ps-5 pe-5 mb-4 head'>
              Find A <span className='text-blue'>Perfect Home</span> To Live With Your Family
            </h1>
            <p className='mb-4 pb-2 ps-5 pe-5'>Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <a className='h_btn btn-primary py-3 px-5 me-3 ms-5 mb-4'>Get Started</a>
            </Container>
          </Col>
          <Col md={6} className='pt-0'>
            <OwlCarousel className='owl-theme' id='banner' loop margin={10} nav dots={false} {...option}>
              <div class='item'>
                <img src={b1}></img>
              </div>
              <div class='item'>
                <img src={b2}></img>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </div>
      {/* -start banner- */}

    </div>

        
    );
}
export default Banner;