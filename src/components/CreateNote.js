import "./CreateNote.css";
export default function CreateNote({ handleCreateNote }) {
  return (
    <div className="create-note">
      <h4 onClick={() => handleCreateNote()}>
        <i className="fas fa-plus-circle"></i> Create a new note
      </h4>
    </div>
  );
}
