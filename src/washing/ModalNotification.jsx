import { Modal } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

function ModalNotification(props){
    const status = props.status
    const message = props.message
    const isShow = props.isShow
    const handleModal = props.handleModal

    return (
        <Modal show={isShow} className='d-flex align-items-center modal-notification'>
            <Modal.Body className='d-flex flex-column align-items-center justify-content-around pt-5'>
                { (status == 'success') ?
                    <Icon.CheckCircle 
                        style={{ 
                            fontSize: '5rem'
                        }}
                        className="mb-3 text-success"
                    /> 
                    :
                    <Icon.XCircle 
                        style={{ 
                            fontSize: '5rem'
                        }}
                        className="mb-3 text-danger"
                    /> 
                }
                {message}
                <button type="button" className="btn w-100 mt-3 text-white " style={{ backgroundColor: 'var(--secondary-color)' }} onClick={handleModal}>Close</button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalNotification;