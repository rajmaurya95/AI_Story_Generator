import React, { useContext, useEffect, useRef ,useState} from 'react';
import noteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import { useNavigate } from "react-router-dom";


const Notes = (props) => {
  const navigate = useNavigate();

  const context = useContext(noteContext)
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
    getNotes()
    }
    else{
      navigate("/login")


    }
    // eslint-disable-next-line
  }, [])
  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})

  }
  const ref = useRef(null)
  const refclose = useRef(null)
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})

  const handleclick=(e)=>{
    // console.log('updating a note',note)
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refclose.current.click();
    props.showAlert("Updated Successfully","success")

  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  //pagination prev
  const [page, setPages] = useState(0)
  

  const getPrevPage=()=>{
setPages(page-1);
  }
  const getNextPage=()=>{
    setPages(page+1);
  }
  
/////////////

const itemsPerPage = 4; // Number of items to display per page

const Tpages = Math.ceil(notes.length / itemsPerPage);

// const reversedArray = notes.ma

const displayedNotes = notes.slice(
  page * itemsPerPage,
  (page + 1) * itemsPerPage
);

const reversedArray = displayedNotes;



////////////////////

  return (
    <>
      <AddNote showAlert={props.showAlert}  />
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='form1'>

{/* tag */}

                <div className="mb-3 d-none">
                  <label htmlFor="tag" className="form-label" >TAG</label>
                  <input type="text" className="form-control" id="etitle" name='etag' value={note.etag} onChange={onChange}/>
                </div>
                
                {/* title  */}

                <div className="mb-3 d-none">
                  <label htmlFor="title" className="form-label" >TITLE</label>
                  <input type="textarea" className="form-control" value={note.etitle} id="etitle" name='etitle' onChange={onChange}  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">STORY</label>
                  {/* <input type="textarea" className="form-control" id="desc" name='description'  onChange={onChange}/> */}
                  <textarea name="edescription" className="form-control" value={note.edescription} id="edesc" cols="30" rows="4" onChange={onChange} style={{ resize: 'none' }} ></textarea>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleclick}>UPDATE STORY</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 mx-2">
        <h1 className='my-3 text-white'>YOUR STORIES</h1>
        {notes.length===0 && <h3 className='my-3 text-whitw' >NO STORIES TO DISPLAY</h3>}
       
        
      </div>
    
    
    

      <div className='row my-3 mx-2'>
     {reversedArray.map((note, index) => {
          return <Noteitem key={index} note={note} updateNote={updateNote} showAlert={props.showAlert} />
        })}
      </div>
      <div className=' d-row gap-2 col-4 text-white mx-auto p-2 '>
      <button className='btn btn-primary'  onClick={getPrevPage} disabled = {page=== 0} type='button'>PREV</button> 
      {page} of {Tpages}     
      <button className='btn btn-primary' onClick={getNextPage} disabled={page===Tpages} type='button'>NEXT</button>      
    </div>
    </>
  )
}

export default Notes;