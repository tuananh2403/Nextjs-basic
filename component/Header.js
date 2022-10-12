import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown } from 'reactstrap';
import { toggle } from '../reducer/header';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
 function Header  () {
   const dataHeader = useSelector((state) => state.header)
   const dispatch = useDispatch();
   function toggleNav(){
      dispatch(toggle());
   }
          const menu = dataHeader.header.map((menu) => {
              if (menu.parentId === 0){
                return (
                    <>
                         <div class="d-none d-lg-block menu-divider"></div>
                            <NavItem>
                                <Link  href={menu.url}><a className="nav-link">{menu.title}</a></Link>
                            </NavItem>
                    </>
                )
              } else {
                  const memuChild = dataHeader.childHeader.map((menuchild,index) =>{
                      if (menuchild.parentId == menu.parentId){
                          return (
                            <>
                                 {index === 0 || index === 4 ? '' : <DropdownItem divider/> }
                                 <DropdownItem>
                                    <a class="dropdown-item" href={menuchild.url}>{menuchild.title}</a>
                                </DropdownItem>
                            </>
                          )
                      }
                  })
                return (
                    <>
                        <div class="d-none d-lg-block menu-divider"></div>
                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                   {menu.title}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {memuChild}
                                </DropdownMenu>
                        </UncontrolledDropdown>
                    </>
                )
              }
          })       
          return (
              <div class="container">
                  <Navbar  expand="lg" light>
                      <NavbarBrand href="/">
                          <img src="https://stemtrunghoc.edu.vn/images/logo.png"></img>
                      </NavbarBrand>
                      <NavbarToggler onClick={toggleNav}/>
                      <Collapse isOpen={dataHeader.isOpen} navbar>
                      <Nav navbar mr-auto className="mr-auto align-items-center">
                              {menu}                            
                        </Nav>
                      </Collapse>
                  </Navbar>
              </div>
     )
    }
 export default Header;