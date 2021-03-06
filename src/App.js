
import React from 'react'
import uuid from 'react-uuid'
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  
  const [notes,setNotes] = React.useState([]);
  const [activeNote,setActiveNote]=React.useState(false);

  const onAddNotes = ()=>{

      const newNote = {
        id: uuid(),
        title: "Untitled Note",
        body:"",
        lastModified:Date.now(),
      }

      setNotes([newNote, ...notes]);
  };

  const onUpdateNote=(onUpdateNote)=>{
      const updatedNotesArray = notes.map((note)=>{
        if(note.id === activeNote){
          return onUpdateNote;
        }

        return note;
      })
      setNotes(updatedNotesArray)
  }

  const onDeleteNote = (idToDelete)=>{
    //? notes are filtered such that only the notes with id same as that of those passed form 
    //? delete event in sidebar are only rendered.
      setNotes(notes.filter((note)=>note.id !== idToDelete));
  };

  const getActiveNote = ()=>{
    return notes.find((note)=>note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar 
      notes={notes}
      onAddNotes={onAddNotes}
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      
      <Main
      activeNote={getActiveNote()}
      onUpdateNote={onUpdateNote}
      />

    </div>
  );
}

export default App;
