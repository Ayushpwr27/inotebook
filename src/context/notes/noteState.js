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
        const json = await response.json();
        console.log(json)
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
        const json = response.json();

        console.log("Adding a New Note")
        // TODO:  Api Call
        const note = {
            _id: "64c3d94e8884b9503a025bd",
            user: "64c3b2f84e0608f0cd36af8c",
            title: title,
            description: description,
            tag: tag,
            date: "2023-07-28T15:05:50.942Z",
            __v: 0,
        };

        setNotes(notes.concat(note))
    }
    // Delete a Note 

    const deleteNote = (id) => {
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note

    const editNote = async (id, title, description, tag) => {
        //API call

        const response = await fetch(`${host}/api/notes/updatenote/64c3b520fc276913decbd28e`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjM2IyZjg0ZTA2MDhmMGNkMzZhZjhjIn0sImlhdCI6MTY5MDU0NzE3OX0.Z2xm0lwAmEvN8wg4ZGoU04DDiAmNkpcVI4U1b2il1dU"
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
            element.title = title;
            element.description = description;
            element.tag = tag;
        }
    }
}
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>{props.children}</NoteContext.Provider>
    );
    };

export default NoteState;
