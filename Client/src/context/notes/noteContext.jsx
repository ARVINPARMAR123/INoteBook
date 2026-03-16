import {createContext} from "react";

const NoteContext = createContext({
    notes : [],
    setNotes: () => {},
    addNote: () => {},
    deleteNote: () => {},
    editNote: () => {},
    getNotes: () => {}
});

export default NoteContext;