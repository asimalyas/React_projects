import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
    ,time:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,//spread operator
        [name]: value
      };
    });
  }
    

  function submitNote(event) {
    
  const now = new Date();
  const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
  const time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
note.time=date+"       "+time;
    props.onAdd(note);
    setNote({
      title: "",
      content: "", 
      time:""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><NoteAddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
