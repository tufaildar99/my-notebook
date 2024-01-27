import "./NoteItem.css";
export default function NoteItem({
  id,
  title,
  content,
  category,
  handleDelete,
  handleEdit,
}) {
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
