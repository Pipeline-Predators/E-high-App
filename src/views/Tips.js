// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Tips() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const arrayMessage = [
//     "welcone to e-high! click next to read more",
//     "in the take quiz section, you will be allowed to choose your subject, select the number of questions and you will be timed based",
//    "e-high has three main features, take quiz, review past questions and challenge",
//     "to begin with login in"
//   ]
// //   let [index,setIndex] = useState(0);
  
// //   const [message,setMessage] = useState(arrayMessage[message]);
   
// //   const handleNextMessage = ()=>{


    
// //   }
  

//   return (
    
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         All About E-High
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         // backdrop="static"
//         dialogClassName="modal-90w"
//         keyboard={true}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>E-High</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          {message}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleNextMessage}>Read More</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Tips;