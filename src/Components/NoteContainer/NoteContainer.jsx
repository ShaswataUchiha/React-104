import React, { useRef } from 'react'
import Note from '../Note/Note'

const NoteContainer = (props) => {

  const ref = useRef(null)

  const reverseArray = (arr) => {
    const array = []

    for(let i=arr.length -1; i>=0; --i){
      array.push(arr[i])
    }

    return array
  }

  const notes = reverseArray(props.notes)


  return (
    <div className='h-screen'>
      <div className='w-full h-[90%] absolute p-5 z-30 flex justify-center sm:justify-normal flex-wrap gap-6 overflow-y-scroll top-[7rem]'>
        {
          notes.map( (item) => (
            <Note  key={item.id}
             note={item}
             deleteNotes={props.deleteNotes} 
             updateText={props.updateText}
             reference = {ref}
             />
          ))
        }
      </div>
    </div>
  )
}

export default NoteContainer