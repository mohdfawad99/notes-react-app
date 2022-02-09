import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/02/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/02/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/02/2022",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "18/02/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const notesHandler = (newNote) => {
    setNotes(newNote);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          notesHandler={notesHandler}
        />
      </div>
    </div>
  );
};

export default App;
