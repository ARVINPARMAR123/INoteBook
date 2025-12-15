import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note} = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                <h5 className="card-title my-3">{props.note.title}</h5>
                <p className="card-text">{props.note.description}</p>
                <i className="fa fa-trash mx-2" aria-hidden="true" onClick={() => {deleteNote(note._id)}}></i>
                <i className="fa-solid fa-pen-to-square"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;