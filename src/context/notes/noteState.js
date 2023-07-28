import NoteContext from "./noteContext";

const NoteState = (props) => {

    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
    );
};

export default NoteState;
