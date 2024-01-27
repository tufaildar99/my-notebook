import "./CreateNoteForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateNoteForm({
  handleFormdata,
  selectedNote,
  handleCloseForm,
}) {
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
          required
        />
        <label>Content</label>
        <textarea
          rows="5"
          cols="33"
          name="content"
          value={item.content || ""}
          onChange={handleChange}
          required
        ></textarea>
        <label>Category</label>
        <select
          id="category"
          name="category"
          value={item.category || ""}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Meeting">Meeting</option>
          <option value="Health">Health</option>
        </select>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button
            type="button"
            className="close-button"
            onClick={handleCloseForm}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
