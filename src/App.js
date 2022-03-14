
import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import {ADD_NOTE,UPDATE_NOTE,DELETE_NOTE} from './redux/action'
import {useDispatch, useSelector} from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const viewNote = useSelector(state=>state)
  const [activeNote,setActiveNote]=React.useState(false);

  const onAddNotes = ()=>{
      dispatch(ADD_NOTE())
  };

  const onUpdateNote=(onUpdateNote)=>{
      const updatedNotesArray = viewNote.map((note)=>{
        if(note.id === activeNote){
          return onUpdateNote;
        }
        return note;
      })
      dispatch(UPDATE_NOTE(updatedNotesArray))
  }

  const onDeleteNote = (idToDelete)=>{
    //? notes are filtered such that only the notes with id same as that of those passed form 
    //? delete event in sidebar are only rendered.
    dispatch(DELETE_NOTE(idToDelete))
  };

  const getActiveNote = ()=>{
    return viewNote.find((note)=>note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar 
      notes={viewNote}
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
