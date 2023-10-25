export default function Sidebar({ notes, setSelectedNote }) {
  return (
    <div className="sidebar p-2 pt-5">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note-item hover:cursor-pointer py-2"
          onClick={() => {console.log("I work"); setSelectedNote(note);}}
        >
          <h3 className="note-title font-bold text-rose-800 text-2xl">{note.title || 'Untitled note'}</h3>
          <p className="note-body text-white">{note.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
