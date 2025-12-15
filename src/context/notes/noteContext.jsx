import {createContext} from "react";

const NoteContext = createContext({
    notes : [],
    setNotes: () => {},
    addNote: (title, description, tag) => {},
    deleteNote: (id) => {},
    editNote: (id, title, description, tag) => {},
    getNotes: () => {}
});

export default NoteContext;