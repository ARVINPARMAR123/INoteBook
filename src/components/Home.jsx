import notes from './Notes';

const Home = () => {
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className='my-3'>      
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Note Title"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>

      <div className="container my-3">
        <h2>Your Notes</h2>
      </div>
    </>
  )
}

export default Home;
