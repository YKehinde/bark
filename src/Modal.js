import './Modal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Modal = ({handleClose}) => {
  return ( 
    <div id="new-lead-success" className="modal fade in show">
        <div className="modal-dialog modal-confirm">
            <div className="modal-content">
                <div className="modal-header text-white text-center">
                    <div className="icon-container py-3">
                        <FontAwesomeIcon icon={["far", "faCheckCircle"]} />
                        <i className="far fa-check-circle fa-8x"></i>
                        TICK
                    </div>
                    <button type="button" className="close text-md text-white"  onClick={handleClose}>×</button>
                </div>
                <div className="modal-body text-center">
                    <h4>Great!</h4>
                    <p>We've submitted your lead, you will hear from one of our Professionals soon.</p>
                    <button className="btn btn-primary" onClick={handleClose}>
                        <span>Submit another request</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
   );
}
 
export default Modal;