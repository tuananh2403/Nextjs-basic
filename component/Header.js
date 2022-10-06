import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown } from 'reactstrap';
import { dataHeader, ChildHeader } from "../shared/data/dataHeader"
import Link from 'next/link';
 class Header extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            data : dataHeader,
            dataChild : ChildHeader,
            isNavOpen: false,
            dropdownOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggle = this.toggle.bind(this);
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      render(){
          const menu = this.state.data.map((menu) => {
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
                  const memuChild = this.state.dataChild.map((menuchild,index) =>{
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
                      <NavbarToggler onClick={this.toggleNav}/>
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar mr-auto className="mr-auto align-items-center">
                              {menu}                            
                        </Nav>
                      </Collapse>
                  </Navbar>
              </div>
     )
    }
 }
 export default Header;