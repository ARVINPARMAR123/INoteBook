import { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
//import EditNote from "./EditNote";
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    } else {
      props.showAlert("Please login to access your notes", "warning");
      navigate('/login');
    }
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""});

  const updateNote = (note) => {
    console.log("Updating the note with id: ", note._id);
    ref.current.click();
    setNote({id: note._id, etitle: note.title, edescription: note.description, etag: note.tag});
  };

  const handleSubmit = (e) => {
        refClose.current.click();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        console.log("Updated Note",note);
        props.showAlert("Note is being edited Successfully", "success");
    }

    const onchange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      {/* <EditNote /> */}

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} placeholder="Enter Note Title" minLength={5} onChange={onchange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="edescription" name="edescription" rows="3" value={note.edescription} minLength={5} onChange={onchange}></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label" >Tag</label>
                  <input type='text' className="form-control" id="etag" name="etag" rows="3" placeholder="General" value={note.etag} onChange={onchange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleSubmit}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-3 fs-4">
        {notes.length === 0 && 'No notes in Database!'}
        </div>
        {/* {Array.isArray(notes) && notes.map((note) => (<NoteItem key={note._id} note={note}/>))} */}
        {notes &&
          notes.map((note) => (
            <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          ))}

      </div>

    </>
  );
};

export default Notes;
