import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkzZDExYjVjMzg1ODYwYmZhMzdhNGE0In0sImlhdCI6MTc2NTYyNjE2N30.dMXcL6-XU6jg3bn8-aj3MSC6bijVFGm7m2oO9YvRjcU",
      },
    });
    const getnotes = await response.json();
    console.log(getnotes);
    setNotes(getnotes);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkzZDExYjVjMzg1ODYwYmZhMzdhNGE0In0sImlhdCI6MTc2NTYyNjE2N30.dMXcL6-XU6jg3bn8-aj3MSC6bijVFGm7m2oO9YvRjcU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log("Adding a new note");
    const note = await response.json();
    console.log(note);
    setNotes([...(notes || []), note]);
    console.log(note);
  
    // const note = {
    //   _id: "693d668607159ff3c5c44272",
    //   user: "693d11b5c385860bfa37a4a4",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2025-12-13T13:13:42.137Z",
    //   __v: 0,
    // };
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkzZDExYjVjMzg1ODYwYmZhMzdhNGE0In0sImlhdCI6MTc2NTYyNjE2N30.dMXcL6-XU6jg3bn8-aj3MSC6bijVFGm7m2oO9YvRjcU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkzZDExYjVjMzg1ODYwYmZhMzdhNGE0In0sImlhdCI6MTc2NTYyNjE2N30.dMXcL6-XU6jg3bn8-aj3MSC6bijVFGm7m2oO9YvRjcU",
      },
    });
    console.log("Deleting the note with id :" + id);
    const json = await response.json();
    console.log(json);
    
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
