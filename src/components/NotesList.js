import Note from './Delete';
import AddNote from './AddNote'


// Creates the notes - list div.
export default function NotesList ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) 
{ console.log("what is in here", notes)
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					key={note.id}
					id={note.id}
					text={note.content}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

