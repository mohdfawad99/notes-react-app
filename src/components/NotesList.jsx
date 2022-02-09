import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, notesHandler }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          updateNotes={notesHandler}
        />
      ))}
      <AddNote addNote={notesHandler} />
    </div>
  );
};

export default NotesList;
