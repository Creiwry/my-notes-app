import { useState, useEffect } from 'react';
import Showdown from 'showdown';

export default function NoteDisplay({ note }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (note && note.content) {
      const converter = new Showdown.Converter({
        tables: true,
        tasklists: true,
        strikethrough: true,
      });
      const html = converter.makeHtml(note.content);
      setHtmlContent(html);
    }
  }, [note]);

  return (
    <div className="note-display h-1/3">
      {note && (
        <div className="flex flex-col justify-center align-center p-4 mt-5">
          <h1 className="text-4xl text-rose-800 font-bold text-center">{note.title}</h1>
          <div className="text-white" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      )}
    </div>
  );
}
