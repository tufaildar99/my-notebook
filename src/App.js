import React from "react";
import Header from "./components/Header.js";
import CreateNote from "./components/CreateNote.js";
import CreateNoteForm from "./components/CreateNoteForm.js";
import NoteList from "./components/NoteList.js";
import EmptyNote from "./components/EmptyNote";
import Footer from "./components/Footer.js";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [formdataArray, setFormdataArray] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  function handleCreateNote() {
    setShowForm(!showForm);
    setSelectedNote(null);
  }

  function handleFormdata(formdata) {
    if (selectedNote) {
      // Editing an existing note
      const updatedFormdataArray = formdataArray.map((note) =>
        note.id === selectedNote.id ? formdata : note
      );
      setFormdataArray(updatedFormdataArray);
      setSelectedNote(null);
    } else {
      // Creating a new note
      setFormdataArray([...formdataArray, { ...formdata, id: uuidv4() }]);
    }
    setShowForm(false);
  }

  function handleDelete(id) {
    const newFormdataArray = formdataArray.filter((item) => item.id !== id);
    setFormdataArray(newFormdataArray);
  }
  function handleEdit(note) {
    setSelectedNote(note);
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
    setSelectedNote(null);
  }
  return (
    <div className="app">
      <Header />
      <CreateNote handleCreateNote={handleCreateNote} />
      {showForm ? (
        <CreateNoteForm
          handleFormdata={handleFormdata}
          selectedNote={selectedNote}
          handleCloseForm={handleCloseForm}
        />
      ) : formdataArray.length > 0 ? (
        <NoteList
          formdataArray={formdataArray}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <EmptyNote />
      )}
      <Footer />
    </div>
  );
}
/*-------------------------------------------------------*/
