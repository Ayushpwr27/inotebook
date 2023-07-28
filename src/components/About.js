import React,{ useContext,useEffect } from "react";
import noteContext from "../context/notes/noteContext";


export const About = () => {
  const a = useContext(noteContext)

  useEffect(()=>{
    a.update();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div>
    This is About {a.state.name} of {a.state.class}
    </div>
    );
};
export default About
