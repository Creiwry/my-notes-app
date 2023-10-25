export default function MarkdownInput({ note, onInputChange, onSave }) {
    console.log("Displaying note:", note);
  const titleValue = note?.title || '';
  const contentValue = note?.content || '';

  return (
    <div className="flex flex-col">
      <input 
        className="input-field m-2 bg-stone-700 text-rose-800 font-bold"
        type="text" 
        placeholder="Note Title" 
        value={titleValue}
        onChange={(e) => onInputChange(e.target.value, contentValue)}
      />
      <textarea 
        className="input-field m-2 bg-stone-700 text-white"
        placeholder="Write your note in markdown"
        value={contentValue} 
        onChange={(e) => onInputChange(titleValue, e.target.value)}
      />
      <button className="bg-rose-800 text-white m-2 p-3" onClick={onSave}>Save</button>
    </div>
  );
}
