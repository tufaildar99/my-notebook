import React from "react";
import emptyStateImage from "./bg img.png";
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

  return (
    <div className="app">
      <Header />
      <CreateNote handleCreateNote={handleCreateNote} />
      {showForm ? (
        <CreateNoteForm
          handleFormdata={handleFormdata}
          selectedNote={selectedNote}
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

function Header() {
  return (
    <div className="Header">
      <h2>My Notebook 📒</h2>
    </div>
  );
}

function CreateNote({ handleCreateNote }) {
  return (
    <div className="create-note">
      <h4 onClick={() => handleCreateNote()}>
        <i className="fas fa-plus-circle"></i> Create a new note
      </h4>
    </div>
  );
}

function CreateNoteForm({ handleFormdata, selectedNote }) {
  const [item, setItem] = useState(selectedNote || {});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setItem((values) => ({ ...values, [name]: value }));
  }

  return (
    <div className="create-note-modal">
      <form
        className="modal"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormdata({ ...item, id: uuidv4() });
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={item.title || ""}
          onChange={handleChange}
        />
        <label>Content</label>
        <textarea
          rows="5"
          cols="33"
          name="content"
          value={item.content || ""}
          onChange={handleChange}
        ></textarea>
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={item.category || ""}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Meeting">Meeting</option>
          <option value="Health">Health</option>
        </select>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" className="close-button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

function NoteList({ formdataArray, handleDelete, handleEdit }) {
  return (
    <div className="note-list">
      {formdataArray.map((item) => (
        <NoteItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          category={item.category}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

function NoteItem({ id, title, content, category, handleDelete, handleEdit }) {
  const handleEditClick = () => {
    handleEdit({ id, title, content, category });
  };

  return (
    <div className="note-item">
      <div className="note-item-info">
        <h4>
          {title} <span className="category">{category}</span>
        </h4>
        <p>{content}</p>
      </div>
      <div className="note-item-actions">
        <div>
          <button onClick={handleEditClick}>
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button onClick={() => handleDelete(id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyNote() {
  return (
    <div className="empty-state">
      <p>
        No notes added yet. Start creating notes to keep track of your thoughts
        and ideas.
      </p>
      <img
        src={emptyStateImage}
        alt="img"
        style={{ width: "300px", height: "auto", backgroundColor: "#f0f0f0;" }}
      ></img>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      Crafted with ❤️ by Tufail Dar
    </footer>
  );
}
