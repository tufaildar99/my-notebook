import React from "react";
import emptyStateImage from "./bg img.png";
import { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [formdataArray, setFormdataArray] = useState([]);

  function handleCreateNote() {
    setShowForm(!showForm);
  }

  function handleFormdata(formdata) {
    setFormdataArray([...formdataArray, formdata]);
    setShowForm(false);
  }

  return (
    <div className="app">
      <Header />
      <CreateNote handleCreateNote={handleCreateNote} />
      {showForm ? (
        <CreateNoteForm handleFormdata={handleFormdata} />
      ) : formdataArray.length > 0 ? (
        <NoteList formdataArray={formdataArray} />
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

function CreateNoteForm({ handleFormdata }) {
  const [item, setItem] = useState({});

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
          handleFormdata(item);
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={item.title}
          onChange={handleChange}
        />
        <label>Content</label>
        <textarea
          rows="5"
          cols="33"
          name="content"
          value={item.content}
          onChange={handleChange}
        ></textarea>
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={item.category}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="education">Education</option>
          <option value="sports">Sports</option>
          <option value="meeting">Meeting</option>
          <option value="health">Health</option>
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

function NoteList({ formdataArray }) {
  return (
    <div className="note-list">
      {formdataArray.map((item, index) => (
        <NoteItem
          key={index}
          title={item.title}
          content={item.content}
          category={item.category}
        />
      ))}
    </div>
  );
}

function NoteItem({ title, content, category }) {
  return (
    <div className="note-item">
      <div className="note-item-info">
        <h4>
          {title} <span className="category">{category}</span>
        </h4>
        <p>{content}</p>
      </div>
      <div className="note-item-actions">
        <form>
          <button>
            <i class="fas fa-pencil-alt"></i>
          </button>
          <button>
            <i class="fas fa-trash"></i>
          </button>
        </form>
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
