import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
  },[]);

  return (
    <>
      <AddNote/>
      <div className="row my-3">
          <h2>Your Notes</h2>
          {/* {notes.length === 0 && "No notes to display"} */}
          {/* { notes.map((note) => (
              <NoteItem key={note._id} note={note}/>
          ))
          } */}
          {Array.isArray(notes) && notes.map((note) => (<NoteItem key={note._id} note={note}/>))}
      </div>
    </>
  )};

export default Notes;