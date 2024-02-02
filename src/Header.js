import logo from './image/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import { Link } from "react-router-dom";



function Header(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
           {/* -start header- */}
      <Container className='nav-bar'>
        <nav class="navbar navbar-expand-lg px-4">
          <a className='logo_img d-flex'>
            <div className='icon p-1 me-2 align-items-center justify-content-center'><img src={logo}></img></div>
            <h1 className='m-0 mt-2'>Makaan</h1>
          </a>
          <Button variant="primary" className="navbar-toggler d-lg-none" onClick={handleShow}>
            <span className='navbar-toggler-icon'></span>
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg" className='z-10'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul class="navbar-nav main_menu ms-auto d-lg-none">
                <li class="nav-item py-2 me-1">
                <Link to="/home" className='nav-link active'>Home</Link>

                </li>
                <li class="nav-item  py-2 me-1">
                <Link to="/about" className='nav-link'>About</Link>

                </li>
                <li class="nav-item py-2 me-1 dropdown">
                <Link to="/Property" className='nav-link'>Property<i><IoIosArrowDown></IoIosArrowDown></i></Link>

                  <ul class="sub_menu ps-3 pe-3">
                    <li><a class="sub_item">Property List</a></li>
                    <li><a class="sub_item">Property Type</a></li>
                    <li><a class="sub_item">Property Agent</a></li>
                  </ul>
                </li>
                <li class="nav-item py-2 me-1 dropdown">
                <Link to="/home" className='nav-link'>Pages<i><IoIosArrowDown></IoIosArrowDown></i></Link>

                  <ul class="sub_menu ps-3 pe-3">
                    <li><a class="sub_item">Testimonial</a></li>
                    <li><a class="sub_item">404-erroe</a></li>
                    <li><a class="sub_item">Pages</a></li>
                  </ul>
                </li>
                <li class="nav-item  py-2">
                <Link to="/contact" className='nav-link'>Contact</Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav main_menu ms-auto">
              <li class="nav-item py-2 me-1">
              <Link to="/home" className='nav-link active'>Home</Link>
              </li>
              <li class="nav-item  py-2 me-1">
              <Link to="/about" className='nav-link'>About</Link>
              </li>
              <li class="nav-item py-2 me-1 dropdown">
                <Link to="/home" className='nav-link'>Property<i><IoIosArrowDown></IoIosArrowDown></i></Link>
                <ul class="sub_menu ps-3 pe-3">
                  <li><a class="sub_item">Property List</a></li>
                  <li><a class="sub_item">Property Type</a></li>
                  <li><a class="sub_item">Property Agent</a></li>
                </ul>
              </li>
              <li class="nav-item py-2 me-1 dropdown">
                <Link to="/home" className='nav-link'>Pages<i><IoIosArrowDown></IoIosArrowDown></i></Link>
                <ul class="sub_menu ps-3 pe-3">
                <li><Link to="/testimonial" className='sub_item'>Testimonial</Link></li>
                <li><Link to="/error" className='sub_item'>404-error</Link></li>
                <li><a class="sub_item">Pages</a></li>
                </ul>
              </li>
              <li class="nav-item  py-2">
              <Link to="/contact" className='nav-link'>Contact</Link>
              </li>
            </ul>
            <a className='h_btn px-3 py-2 d-none d-lg-flex btn-primary'>Add Property</a>
          </div>
        </nav>
      </Container>
      {/* -end header- */}

        </div>
    )
}
export default Header;

