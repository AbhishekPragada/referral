import React, {useState} from 'react';
import logo from '../../logoctc.png';
import Modal from '../Modal/modal.js'

const NavBar = () => {

    const [modal, modalChange] = useState(true);
  
    const handleOpen = () => {
      modalChange(true);
    }
    const handleClose = () => {
        modalChange(false)
    }
    return(
        <React.Fragment>
            <Modal show={modal} handleClose={() => handleClose}/>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt='LOGO' height='50px' width='100px' />
                </div>
                <div className="navbar-login">
                    <button className="login-btn" onClick={handleOpen}>Login</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;