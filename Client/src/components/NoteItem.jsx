import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="note-card">
                {note.tag && <span className="note-tag">{note.tag}</span>}
                <h5 className="note-title">{note.title}</h5>
                <p className="note-desc">{note.description}</p>
                <div className="note-actions">
                    <button className="note-btn note-btn-delete" onClick={() => { deleteNote(note._id); props.showAlert("Note deleted successfully", "success"); }}>
                        <i className="fa fa-trash" aria-hidden="true"></i> Delete
                    </button>
                    <button className="note-btn note-btn-edit" onClick={() => { updateNote(note) }}>
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;