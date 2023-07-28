import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export const Notes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line no-unused-vars
    const { notes, setNotes } = context;
    return (
        <div className="container my-3">
            <h2>Your Notes</h2>
            {
                notes.map((note) => {
                    return note.title;
                })
            }
        </div>
    )
}
