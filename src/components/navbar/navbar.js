import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../dropdown/Dropdown';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
function Navbar() {
  const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <header className="header__middle">
    <div className="container">
        <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
                <NavLink exact activeClassName='is-active' className='navbar-logo' to="/">
                DAMITO <i className='fab fa-typo3' />
                </NavLink>
                <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <div className="header__middle__menus">
                <nav className="main-nav " >
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? <> 
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                </> : <> 
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                </>}
                <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/market`}> Market </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="/dashboard/add"> Service <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/post`}> 공지사항 </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tutorial`}> 튜토리얼 </NavLink> </li>
                        
                        </ul>
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Center <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/fqa`}> FQA </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/qna/add`}> 1:1문의 </NavLink> </li>
                        </ul>
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Info <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/homesub`}> User </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/datainfo`}> Data </NavLink> </li>
                        </ul>
                    </li>                    
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/register`}> SignIn </NavLink> 
                    </li>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/loginpost`}> Login </NavLink> 
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> manager <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/users/add`}> Add User </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/post/add`}> Add 공지사항 </NavLink> </li>
      
                        </ul>
                    </li>    
                    
                </ul>
                </nav>     
            </div>   
            </div>
            
            
        </div>
  </div>
</header>
    // <>
    //   <nav className='navbar'>
    //     <div className='navbar-container'>
    //       {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
    //       <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
    //         DAMITO
    //         <i className='fab fa-typo3' />
    //       </Link>
    //       <div className='menu-icon' onClick={handleClick}>
    //         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    //       </div>
    //       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //         <li className='nav-item'>
    //           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
    //             Home
    //           </Link>

    //         </li>

    //         <li className='nav-item'>
    //           <Link to='/mypage' className='nav-links' onClick={closeMobileMenu}>
    //             MyPages
    //           </Link>

    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/market' className='nav-links' onClick={closeMobileMenu}>
    //             Market
    //           </Link>
    //         </li>
    //         <li className='nav-item'
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}>

    //           <Link to='/contact'
    //             className='nav-links'
    //             onClick={closeMobileMenu}>
    //             Contact <i className='fas fa-caret-down' />
    //           </Link>
    //           {dropdown && <Dropdown />}
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/homesub' className='nav-links' onClick={closeMobileMenu}>
    //             HomeSub
    //           </Link>
    //         </li>
    //         <li className='nav-item'>
    //           Service
    //           <ul>
    //             <li><NavLink to={`/Online`}> Online </NavLink> </li>
    //             <li><NavLink to={`/Offline`}> Offline </NavLink> </li>
    //           </ul>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/mypage' className='nav-links' onClick={closeMobileMenu}>
    //             Mypage
    //           </Link>
    //         </li>
    //         <li className='nav-item nav-space'>
    //           {/* <Link to='/login' className='nav-links' onClick = {closeMobileMenu}>
    //                     </Link> */}
    //           <Link to="/register" className='nav-links' onClick={closeMobileMenu}>
    //             signIn
    //           </Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/loginpost' className='nav-links' onClick={closeMobileMenu}>
    //             Login
    //           </Link>
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/users/add' className='nav-links' onClick={closeMobileMenu}>
    //             Add User
    //           </Link>
    //         </li>

    //       </ul>
    //     </div>
    //   </nav>
    // </>
  );
}

export default Navbar