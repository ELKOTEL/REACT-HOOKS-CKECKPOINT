import React from 'react'  
import  { useState } from 'react'
import  { useEffect } from 'react'
import data from '../MovieList'
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.min.css';



const Filter = () => {
const [input, setInput] = useState('')
const [output, setOutput] = useState([])
const searchText = (e) =>{
  setInput(e.target.value);
}
useEffect(() => {
  setOutput([])
  data.cardData.filter(e=>{
    if ((e.title.toLowerCase().includes(input.toLowerCase())) || (e.rate.toLowerCase().includes(input.toLowerCase())) ){
      setOutput(output=>[...output,e])
    }
  })
   

}, [input])



  return (
    <div className='a'>     
        <div className='input'>
                <input type="text"
                 placeholder="Enter Movie Name or rate" 
                 className="inputText"
                 onChange={searchText}>                   
          </input>
        </div>
        <div   className="addText">
            <Add/>
        </div>
        <div className='containercards'>
        <div className='cards'>
          {console.log(output)}
        {output.map((item)=>{
          return(
            <div className='card'>
              <img src={item.img}className='moviePoster'></img>
              <div className='description'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

              </div>
              <div className='movieBody'>
                <h5 className='title'>{item.title}</h5>
                <p className='rate'>{item.rate}</p>
              </div>  
              
              </div>
          )
        })}
        </div> 
        </div>

    </div>
  )
}

export default Filter









