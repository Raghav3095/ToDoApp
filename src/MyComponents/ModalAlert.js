import Modal from 'react-bootstrap/Modal'
import React from 'react'

function App(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Congratulations!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    You have no more tasks to do. Add some more tasks or enjoy the rest of your day!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export const ModalAlert = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button className="btn btn-sm btn-dark" onClick={() => setModalShow(true)}>
                Woohoo!
            </button>
            
            <App
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ModalAlert;