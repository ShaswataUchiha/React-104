import React, { useEffect, useState } from "react";
import Background from "./Components/Background";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Chose from "./Components/ChoseBar/Chose";


const App = () => {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('DOCSAPP')) || []
    );

  const addNote = (color) => {
    const tempNotes = [...notes]

    tempNotes.push({
      id : Date.now() + "" + Math.floor(Math.random()*78),
      text : "",
      time : Date.now(),
      color
    })

    setNotes(tempNotes)
  }

  const deleteNotes = (id) => {
    const tempNotes = [...notes]

    const index = tempNotes.findIndex( (item) => item.id === id)

    if (index<0) return

    tempNotes.splice(index, 1)

    setNotes(tempNotes)
  }

  const updateText = (text, id) => {
    const tempNotes = [...notes]

    const index = tempNotes.findIndex( (item) => item.id === id)

    if (index<0) return

    tempNotes[index].text = text
    setNotes(tempNotes)
  }

  useEffect( () => {
    localStorage.setItem('DOCSAPP', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="relative bg-zinc-800 h-screen w-full pt-4 flex overflow-x-hidden overflow-y-hidden transition-all ease-in">
      
        <Background />
        <NoteContainer notes={notes} deleteNotes={deleteNotes} updateText={updateText}/>
        <Chose addNote={addNote}/> 
    </div>
  );
};

export default App;
