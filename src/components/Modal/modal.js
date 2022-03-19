import React, {useState} from 'react';
import TextField from "@mui/material/TextField";

const Modal = (props) => {

    const modalClass = props.show ? "modal on" : "modal off";

    const [modalValue, setModalValue] = useState(1);
    const switchTab1 = () => {
        setModalValue(1);
    }
    const switchTab2 = () => {
        setModalValue(2);
    }
    console.log(modalValue);

    return(
        <div className={modalClass}>
            <section className="modal-main">
                <div className="modal-button">
                    <button className="modal-close-btn" type="button" onClick={props.handleClose()}>
                        X
                    </button>
                </div>
                <div className="modal-form">
                    <div className="modal-switch">
                        <button className="modal-switch-button" onClick={switchTab1}>Sign In</button>
                        <button className="modal-switch-button" onClick={switchTab2}>Sign Up</button>
                    </div>
                    {modalValue === 1 ? 
                        <div className="modal-forum">
                            <TextField className="login-field" id="outlined-basic" label="Email" variant="outlined" />
                            <TextField className="login-field" id="outlined-basic" label="Password" variant="outlined" />
                            <a href="#" className="new-user">New User?</a>
                            <button className="submit-button">Submit</button>
                        </div> 
                    
                    :   <div>
                            SignUp
                        </div>
                    }
                    
                </div>
                
            </section>
        </div>
    )
}

export default Modal;
