import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitems from "./Noteitems";
import AddNote from "./AddNote";

export const Notes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line no-unused-vars
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const ref = useRef(null)
  let [note, setNote] = useState({etitle: "", edescription:"",etag:""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }
  const handleClick = (e) => {
    console.log("Updating the note...", note)
      e.preventDefault();
      
  };
  const onChange = (e) => {
      setNote({...note,[e.target.name]:e.target.value})
  };


  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="etitle"
                        name="etitle"
                        aria-describedby="emailHelp"
                        value={note.etitle}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="edescription"
                        name="edescription"
                        value={note.edescription}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="etag"
                        name="etag"
                        aria-describedby="emailHelp"
                        value={note.etag}
                        onChange={onChange}
                    />
                </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {
          notes.map((note) => {
            return <Noteitems key={note._id} note={note} updateNote={updateNote} />
          })
        }
      </div>
    </>
  )
}
