import React, { useState } from 'react'
import {Accordion, Button, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import {Help, MenuOutlined, Person, ShoppingCart} from '@material-ui/icons'

export const Header = () => {
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    return (
            <Navbar sticky='top' expand='md' bg='dark' collapseOnSelect variant='dark' 
            className="justify-content-between " >
                <div style={{display:'flex',marginLeft:'10px'}}>
                <Button variant="primary" onClick={handleShow} style={{marginRight:'10px'}}>
                    MENU
                </Button>
                <Navbar.Brand><img src='logo.svg' style={{width:'50px',height:'50px',borderRadius:'50%'}} />KAGYA FOODS</Navbar.Brand>
                </div>
                <ul className='justify-content-end'>
               <div >
               <Navbar.Toggle style={{position:'absolute'}} />
                <MenuOutlined  className='control'/>
               </div>
                
                <Navbar.Collapse>
                    <Nav.Link>
                        <Person/> Account
                    </Nav.Link>
                    <Nav.Link>
                        <Help/>Help
                    </Nav.Link>
                </Navbar.Collapse>
                </ul>
                <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src='logo.svg' style={{width:'50px',height:'50px',borderRadius:'50%'}} />KAGYA FOODS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Accordion defaultActiveKey='0' flush style={{ position:'sticky' }} >
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Dashboard</Accordion.Header>
                <Accordion.Body style={{cursor:'pointer'}}><a href='/shop'>Dashboard</a></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                <Accordion.Header> Product</Accordion.Header>
                <Accordion.Body style={{cursor:'pointer'}}><a href='/shop'>Add Product</a></Accordion.Body>
                    <Accordion.Body style={{cursor:'pointer'}}><a href='/shop'>Edit Product</a></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                <Accordion.Header>Account</Accordion.Header>
                    <Accordion.Body style={{cursor:'pointer'}}><a href='/shops'>Overview</a></Accordion.Body>
                    <Accordion.Body style={{cursor:'pointer'}}><a href='/shops'>Settings</a></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar>
  )
}
