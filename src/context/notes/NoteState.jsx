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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkzZDExYjVjMzg1ODYwYmZhMzdhNGE0In0sImlhdCI6MTc2NTYyNjE2N30.dMXcL6-XU6jg3bn8-aj3MSC6bijVFGm7m2oO9YvRjcU",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes()
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
    const json = response.json();

    console.log("Adding a new note");

    const note = {
      _id: "693d668607159ff3c5c44272",
      user: "693d11b5c385860bfa37a4a4",
      title: title,
      description: description,
      tag: tag,
      date: "2025-12-13T13:13:42.137Z",
      __v: 0,
    };
    setNotes(notes.push(note));
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkzZDExYjVjMzg1ODYwYmZhMzdhNGE0In0sImlhdCI6MTc2NTYyNjE2N30.dMXcL6-XU6jg3bn8-aj3MSC6bijVFGm7m2oO9YvRjcU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  // Delete a Note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    console.log("Deleting the note with id :" + id);
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
