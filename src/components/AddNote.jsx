import { useState } from "react";
import { nanoid } from "nanoid";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const saveBtnHandler = () => {
    const date = new Date();
    if (noteText.trim().length > 0) {
      const newNote = {
        text: noteText,
        date: date.toLocaleDateString(),
        id: nanoid(),
      };
      addNote((prevNotes) => [...prevNotes, newNote]);
    }
    setNoteText("");
    
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        // maxLength={characterLimit}
        value={noteText}
        onChange={(e) => {
          if (characterLimit - e.target.value.length >= 0)
            setNoteText(e.target.value);
        }}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={saveBtnHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
