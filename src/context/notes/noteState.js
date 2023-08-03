import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            _id: "64c3b527fc276913decbd291",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitile",
            description: "Please wake up early",
            tag: "personal",
            date: "2023-07-28T12:31:35.694Z",
            __v: 0,
        },
        {
            _id: "64c3d94e889dcb9503a025bd",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitil 2",
            description: "Please wake up early and do brush your teeth",
            tag: "personal",
            date: "2023-07-28T15:05:50.942Z",
            __v: 0,
        },
        {
            _id: "64c3b527tc276913decbd291",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitile",
            description: "Please wake up early",
            tag: "personal",
            date: "2023-07-28T12:31:35.694Z",
            __v: 0,
        },
        {
            _id: "64c3d94e8e9dcb9503a025bd",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitil 2",
            description: "Please wake up early and do brush your teeth",
            tag: "personal",
            date: "2023-07-28T15:05:50.942Z",
            __v: 0,
        },
        {
            _id: "64c3b527fc276916decbd291",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitile",
            description: "Please wake up early",
            tag: "personal",
            date: "2023-07-28T12:31:35.694Z",
            __v: 0,
        },
        {
            _id: "64c3d94e889dhb9503a025bd",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitil 2",
            description: "Please wake up early and do brush your teeth",
            tag: "personal",
            date: "2023-07-28T15:05:50.942Z",
            __v: 0,
        },
        {
            _id: "64c3b527fc176913decbd291",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitile",
            description: "Please wake up early",
            tag: "personal",
            date: "2023-07-28T12:31:35.694Z",
            __v: 0,
        },
        {
            _id: "64c3d94e888   cb9503a025bd",
            user: "64c3b2f84e0608f0cd36af8c",
            title: "mytitil 2",
            description: "Please wake up early and do brush your teeth",
            tag: "personal",
            date: "2023-07-28T15:05:50.942Z",
            __v: 0,
        },
    ];
    // eslint-disable-next-line no-unused-vars
    const [notes, setNotes] = useState(notesInitial) 
    return (
        <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
    );
};

export default NoteState;
