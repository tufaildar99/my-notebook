import emptyStateImage from "./bg img.png";
import "./EmptyNote.css";
export default function EmptyNote() {
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
