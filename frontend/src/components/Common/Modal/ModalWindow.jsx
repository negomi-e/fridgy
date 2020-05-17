import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import deleteImg from './delete.png'


export function ModalWindow(props) {
  const [smShow, setSmShow] = useState(false);
  return (
    <>
      <Button variant="light" onClick={() => setSmShow(true)}>
        <img className="btn-img" src={deleteImg} />
      </Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            You want delete ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            props.children
          }
        </Modal.Body>
      </Modal>
    </>
  )

}
