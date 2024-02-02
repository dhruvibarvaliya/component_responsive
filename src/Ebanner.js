import Header from "./Header";
import { Container, Row, Col} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import b1 from './image/b1.jpeg';
import b2 from './image/b2.jpeg';
import { Link } from "react-router-dom";
import Search from "./Search";
import Footer from "./Footer";
import Ferror from "./Ferror";

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

function Ebanner(){
    return(
        <div>
            <Header/>
             {/* -start banner- */}
            <div className='header p-0'>
                <Row className='g-0 align-item flex-column-reverse flex-md-row'>
                <Col md={6} className='mt-lg-5'>
                    <Container>
                    <h1 className='display-5 pt-5 ps-5 pe-5 mb-4 head'>
                    404 ERROR
                    </h1>
                    <nav className=" ps-5 pe-5 mb-4">
                        <ol className="breadcrumb">
                        <li className="bread-item"><Link to="/home" className=''>HOME</Link></li>
                        <li className="breadcrumb-item"><Link to="/pages" className=''>PAGES</Link></li>
                        <li className="breadcrumb-item"><Link to="/Error" className=''>404 ERROR</Link></li>
                        </ol>
                    </nav>
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
            <Search/>
            <Ferror/>
            <Footer/>
        </div>
    )
}
export default Ebanner;