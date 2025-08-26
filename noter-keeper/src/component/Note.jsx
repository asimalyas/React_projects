import React from "react";
import "../styles.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import TitleIcon from '@mui/icons-material/Title';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

   
 // Format: HH:MM:SS AM/PM

  return (
    <div className="note">
      <p><CalendarMonthIcon/>{props.time}<AccessTimeIcon/></p> {/* Display date and time */}
      <h1><TitleIcon/>{props.title}</h1>
      <p ><DescriptionIcon/>{props.content}</p>
      <button onClick={handleClick}>< DeleteIcon/></button>
    </div>
  );
}

export default Note;
