import React from "react";

/* <App>
  ├── <NoteList>
  │     ├── <NoteItem />
  │     ├── <NoteItem />
  │     └── ...
  ├── <NoteEditor />
  ├── <DeleteConfirmation />
  └── <Optional: CategoriesTags />
       └── <Optional: CategoryTagItem />
  └── <Optional: SearchBar />
 */

export default function App() {
  return (
    <div className="app">
      <Header />
      <CreateNote />

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

function CreateNote() {
  return (
    <div className="create-note">
      <a>
        <h4>
          <i className="fas fa-plus-circle"></i> Create a new note
        </h4>
      </a>
    </div>
  );
}

function CreateNoteForm() {
  return (
    <div className="create-note-modal">
      <form className="modal">
        <label>Title:</label>
        <input type="text" name="title" />
        <label>Content</label>
        <textarea rows="5" cols="33"></textarea>
        <label>Category</label>
        <select id="category" name="category">
          <option value="education">Education</option>
          <option value="sports">Sports</option>
          <option value="meeting">Meeting</option>
          <option value="health">Health</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function NoteList() {
  return (
    <div className="note-list">
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
}

function NoteItem() {
  return (
    <div className="note-item">
      <div className="note-item-info">
        <h4>
          Lorem Ipsum <span className="category">Education</span>
        </h4>
        <p>
          I'm sorry, but I'm not able to generate "lorem ipsum" text for you. My
          expertise is limited to software development topics. Is there anything
          else I can assist you with? I'm sorry, but I'm note anything else I
          can assist you with? I'm sorry, but I'm not able to generate "lorem
          ipsum" text for you. My expertise is limited to software development
          topics. Is there anything else I can assist you with? I'm sorry, but
          I'm note anything else I can assist you with?
        </p>
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

function Footer() {
  return <footer className="footer">Designed with ❤️ by Tufaildar</footer>;
}
