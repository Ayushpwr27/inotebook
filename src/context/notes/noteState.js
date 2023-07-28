import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        name: "Ayush",
        class: "IT1",
    };
    const [state, setState] = useState(s1);
    const update =()=>{
        setTimeout(() => {
            setState({
                name: "Mehee",
                class: "CS4",
            })
        }, 5000);
    }


    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <NoteContext.Provider value={{state, update}}>{props.children}</NoteContext.Provider>
    );
};

export default NoteState;
