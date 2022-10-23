import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Add = ({ movies, setMovies}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({
        img: "",
        desc:"",
        title: "",
        rate: "",
      });
    const addMovie = (newMovie) => {
        setMovies([newMovie, ...movies])
        handleClose()
        
        setNewMovie({ img: "" ,  desc:"", title: "", rate: "",})
       }
    
    const handleChange=(e) => {
        setNewMovie({[e.target.name]:e.target.value})
        }
    
  return (
    
    <div>
         <Button className='button-62' variant="primary" onClick={handleShow} style={{backgroundColor: "#e88e27" ,width: 250 , color:"rgb(172, 9, 136)" ,border:"none"} }>
          Add New Movie
        </Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input
                 name='url'
                 type="text"
                 placeholder="url" 
                 className="box"
                 onChange={handleChange}
                 value={newMovie.img}
                 >                   
            </input> 
            <input
                 name='desc'
                 type="text"
                 placeholder="desc" 
                 className="box"
                 onChange={handleChange}
                 value={newMovie.desc}
                 >                   
            </input> 
            <input
                 name='title'
                 type="text"
                 placeholder="title" 
                 className="box"
                 onChange={handleChange}
                 value={newMovie.title}
                 >                   
            </input> 
            <input
                 name='rate'
                 type="text"
                 placeholder="rate" 
                 className="box"
                 onChange={handleChange}
                 value={newMovie.rate}
                 >                   
            </input> 
                 <h1>{newMovie.url}</h1>
                 <h1>{newMovie.desc}</h1>
                 <h1>{newMovie.title}</h1>
                 <h1>{newMovie.rate}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMovie(
            newMovie)}>   Confirm  </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add