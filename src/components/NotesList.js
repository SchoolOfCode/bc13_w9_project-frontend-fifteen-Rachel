import Card from './Card';
import AddNote from './AddNote'

export default function NotesList ({ notes, handleAddNote, handleDeleteNote}) { 
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Card
					key={note.id}
					id={note.id}
					text={note.content}
					date={note.time.split("T").shift()}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

//note.stime.toLocaleDateString('en-GB')