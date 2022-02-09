import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, date, updateNotes, id }) => {
  const deleteHandler = () => {
    updateNotes((prevNotes) =>
      prevNotes.filter((currNote) => currNote.id !== id)
    );
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={deleteHandler}
        />
      </div>
    </div>
  );
};

export default Note;
