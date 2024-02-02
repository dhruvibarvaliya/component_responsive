import './App.css';
import { Container} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import t1 from './image/t1.jpeg';
import t2 from './image/t2.jpeg';
import t3 from './image/t3.jpeg';
const option1={
    responsive:{
      0:{
        items:1,
      },
      1000:{
        items:2,
      }
    }
  }
  
function Slider(){
    return(
        <div>
             {/* -start testimonial- */}
      <div className='container-xxl py-5'>
        <Container>
          <div className='text-center mx-auto mb-5 m-w'>
            <h1 className='mb-3 color-primary'>Our Clients Say!</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className='px-5'>
          <OwlCarousel className='owl-theme' id='banner2' loop margin={10} nav dots={false} {...option1}>
              <div class='item'>
                <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                    <div className='d-flex align-items-center'>
                      <img src={t1} className='img-fluid flex-shrink-0 rounded i-w'></img>
                      <div className='ps-3'>
                        <h6 className='mb-0 color-primary'>Client Name</h6>
                        <small className='grey'>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item'>
              <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                    <div className='d-flex align-items-center'>
                      <img src={t2} className='img-fluid flex-shrink-0 rounded i-w'></img>
                      <div className='ps-3'>
                        <h6 className='mb-0 color-primary'>Client Name</h6>
                        <small className='grey'>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='item'>
              <div className='testimonial-item bg-light rounded p-3'>
                  <div className='bg-white border rounded p-4'>
                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                    <div className='d-flex align-items-center'>
                      <img src={t3} className='img-fluid flex-shrink-0 rounded i-w'></img>
                      <div className='ps-3'>
                        <h6 className='mb-0 color-primary'>Client Name</h6>
                        <small className='grey'>Profession</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </Container>

      </div>
      {/* -start testimonial- */}
        </div>
    )
}
export default Slider;