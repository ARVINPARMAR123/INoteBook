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
        props.showAlert("Added Successfully", "success");
    }

    const onchange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    // console.log(context);
    // console.log(useContext(NoteContext));

  return (
    <>
        <div className="container my-3">
        <h2>Add a Note</h2>
        <form className='my-3' onSubmit={handleSubmit}>      
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={note.title} placeholder="Enter Note Title" minLength={5} onChange={onchange}/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" rows="3" value={note.description} minLength={5} onChange={onchange}></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label" >Tag</label>
            <input type='text' className="form-control" id="tag" name="tag" rows="3" placeholder="General" value={note.tag} onChange={onchange}/>
          </div>
        
          <button disabled={note.title.length<5 || note.description.length<5} type='submit' className='btn btn-primary'>Add Note</button>
        </form>
      </div>
    </>
  )
}

export default AddNote;
