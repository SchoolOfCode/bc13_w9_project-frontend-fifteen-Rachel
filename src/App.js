import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Edit from './components/Edit';



// Get a list of notes.
export default function App  () {
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState('');	

	useEffect(() => {
        async function getNotes () {
            const response = await fetch ('http://localhost:3001/api/notes', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
            const data = await response.json()
            const note = data.payload
			setNotes(note);
		} getNotes()
	}, []);

		// Add a note.
	const addNote = async (text) => {
		const response = await fetch('http://localhost:3001/api/notes', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ content: text }),
		})
		const data = await response.json()
        const note = data.payload
		setNotes([...notes, note]);
	};

	const deleteNote = async (id) => {
		await fetch(`http://localhost:3001/api/notes/${id}`, {
			method: 'DELETE',
		})
		setNotes(notes.filter((notes)=> notes.id !== id))
	};

	const editNote = async (text, id) => {
		console.log("edit text is being passed ?", text);
		await fetch(`http://localhost:3001/api/notes/${id}`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ content: text }),
		})
		setNotes(notes.map((notes) => notes.id === id ? notes.content:text))
	}
	
		// Returns a div for the container.
	return (
			<div className='container'>
				<div className='header'>
				<h1>Code Snippets</h1>
			</div>
			<Search handleSearchNote={setSearchText} />
			<Edit handleEditNote={editNote}/>
			<NotesList
				notes={notes.filter((note) =>
					note.content.toLowerCase().includes(searchText)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
			</div>
	);
};
