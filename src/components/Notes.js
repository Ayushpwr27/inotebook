import React, { useContext ,useEffect} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitems from "./Noteitems";
import AddNote from "./AddNote";

export const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line no-unused-vars
    const { notes, getNotes } = context;
    useEffect(() => {
            getNotes()
    }, [])
    
    return (
        <>  
            <AddNote/>
            <div className="row my-3">
            <h2>Your Notes</h2>
            {
                notes.map((note) => {
                    return <Noteitems key={note._id} note={note} />
                })
            }
        </div>
        </>
    )
}
