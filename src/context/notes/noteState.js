import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    // eslint-disable-next-line no-unused-vars
    const [notes, setNotes] = useState(notesInitial)
    // Get all notes
    const getNotes = async() => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjM2IyZjg0ZTA2MDhmMGNkMzZhZjhjIn0sImlhdCI6MTY5MDU0NzE3OX0.Z2xm0lwAmEvN8wg4ZGoU04DDiAmNkpcVI4U1b2il1dU"
            }
        });
        const json = await response.json() 
        setNotes(json)
    }

    // Add a Note 
    const addNote = async(title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjM2IyZjg0ZTA2MDhmMGNkMzZhZjhjIn0sImlhdCI6MTY5MDU0NzE3OX0.Z2xm0lwAmEvN8wg4ZGoU04DDiAmNkpcVI4U1b2il1dU"
            },
            body: JSON.stringify({title,description,tag})
        });
        // eslint-disable-next-line no-unused-vars
        const note = response.json();
        setNotes(notes.concat(note))
    }
    // Delete a Note 

    const deleteNote = async(id) => {

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjM2IyZjg0ZTA2MDhmMGNkMzZhZjhjIn0sImlhdCI6MTY5MDU0NzE3OX0.Z2xm0lwAmEvN8wg4ZGoU04DDiAmNkpcVI4U1b2il1dU"
            }
        });
        // eslint-disable-next-line no-unused-vars
        const json = response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
        
    }

    // Edit a Note

    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjM2IyZjg0ZTA2MDhmMGNkMzZhZjhjIn0sImlhdCI6MTY5MDU0NzE3OX0.Z2xm0lwAmEvN8wg4ZGoU04DDiAmNkpcVI4U1b2il1dU"
            },
            body: JSON.stringify({title,description,tag})
        });
        // eslint-disable-next-line no-unused-vars
        const json = response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            element.tag = tag;
            break;
        }
    }
    setNotes(newNotes)
}
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>{props.children}</NoteContext.Provider>
    );
    };

export default NoteState;
