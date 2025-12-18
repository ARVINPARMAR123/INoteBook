import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                <h5 className="card-title my-3">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i className="fa fa-trash mx-2" aria-hidden="true" onClick={() => {deleteNote(note._id); props.showAlert("Note deleted successfully", "success");}} ></i>
                <i className="fa-solid fa-pen-to-square" onClick={() => {updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;