import React, { useRef } from 'react';
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion"

const Note = (props) => {


  let timer=500,timeout

  const formatDate = (value) => {
    if(!value) return ""
    const date = new Date(value)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemberr', 'October', 'November', 'December']

    // Finding Hours
    let hrs = date.getHours()
    let amPm = hrs>12 ? "PM" : "AM"
    hrs = hrs ? hrs : "12"
    hrs = hrs>12 ? hrs=24-hrs : hrs

    // Finding Minutes
    let min = date.getMinutes()
    min = min<10 ? "0" : min

    // Finding Date
    let day = date.getDate()

    // Finding Month
    let mn = months[date.getMonth()]

    return `${hrs}:${min} ${amPm} ${day} ${mn}`
  }

  const deBounce = ( (func) => {
    clearTimeout(timeout)
    timeout = setTimeout(func, timer)
  })
    
  const updateText = (text, id) => {
    deBounce(props.updateText(text, id))
  }

  return (
    <div>
      <motion.div drag  className='note p-5 h-72 w-80 rounded-lg flex flex-col opacity-80' style={ {backgroundColor : props.note.color} }>
        <textarea className='note-text resize-none h-52 w-72 bg-transparent text-lg font-semibold outline-none border-none' defaultValue={props.note.text} 
         onChange={ (event) => updateText(event.target.value, props.note.id)} 
        />
        <div className='flex justify-between items-center'>
          <p>{formatDate(props.note.time)}</p>
          <MdDelete className='text-[1.5rem]'
          onClick={ () => props.deleteNotes(props.note.id)}
          />
        </div>
        
      </motion.div>
    </div>
  );
}

export default Note;
