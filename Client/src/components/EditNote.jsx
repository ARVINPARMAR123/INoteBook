// import {useRef, useContext} from 'react'
// import NoteContext from '../context/notes/noteContext';

    
// const EditNote= (note) => {
//     // const context = useContext(NoteContext);
//     // const { editNote } = context;
    
//     const ref = useRef(null);
//     //ref.current.click();
//     console.log("Updating the note", note);

//   return (
//     <div>
//       <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button>
      
//       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>

//             {/* <div className="modal-body">
//               <form className='my-3' onSubmit={handleSubmit}>      
//                 <div className="mb-3">
//                   <label htmlFor="title" className="form-label">Title</label>
//                   <input type="text" className="form-control" id="title" name="title" value={note.title} placeholder="Enter Note Title" onChange={onchange}/>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="description" className="form-label">Description</label>
//                   <textarea className="form-control" id="description" name="description" rows="3" value={note.description} onChange={onchange}></textarea>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="tag" className="form-label">Tag</label>
//                   <input type='text' className="form-control" id="tag" name="tag" rows="3" value={note.tag} onChange={onchange}/>
//                 </div>
        
//                 <button type='submit' className='btn btn-primary'>Add Note</button>
//               </form>
//             </div> */}

//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary">Update Note</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// };
// export default EditNote;
