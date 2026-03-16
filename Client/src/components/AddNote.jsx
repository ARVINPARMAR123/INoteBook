import {useContext, useState} from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Note added successfully", "success");
    }

    const onchange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className="addnote-card">
      <h4 className="addnote-title">Add a New Note</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} placeholder="Enter note title" minLength={5} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" rows="3" value={note.description} placeholder="Write something..." minLength={5} onChange={onchange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag <span className="text-muted fw-normal" style={{fontSize:'0.8rem'}}>(optional)</span></label>
          <input type="text" className="form-control" id="tag" name="tag" placeholder="e.g. Work, Personal, Ideas" value={note.tag} onChange={onchange} />
        </div>
        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary">Add Note</button>
      </form>
    </div>
  )
}

export default AddNote;
