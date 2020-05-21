import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { IoIosTrash } from 'react-icons/io'


export function ModalWindow(props) {
  const [smShow, setSmShow] = useState(false);
  //Refact - ошибка при открытии окна
  return (
    <>

      <Button className={'btnModal'} variant="light" onClick={() => setSmShow(true)}>
        {props.text ? props.text : null}<IoIosTrash />
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
            React.cloneElement(props.children, { setSmShow: setSmShow })
          }
        </Modal.Body>
      </Modal>
    </>
  )

}
