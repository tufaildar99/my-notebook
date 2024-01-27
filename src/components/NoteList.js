import "./NoteList.css";
import NoteItem from "./NoteItem";

export default function NoteList({ formdataArray, handleDelete, handleEdit }) {
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
