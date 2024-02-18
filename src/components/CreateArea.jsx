import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
const [isClicked, setIsclicked] = useState(false)
function onClick(){
  setIsclicked(true)
};

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          onClick={onClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
        />
        <Zoom in={isClicked}><Fab onClick={submitNote}><AddBoxIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
