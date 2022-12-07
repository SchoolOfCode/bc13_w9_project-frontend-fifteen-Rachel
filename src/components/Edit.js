import { useState } from "react"

export default function Edit ({ handleEditNote }) {
	const [id, setId] = useState('')
	const [text, setText] = useState('')

	const handleClick = () => {
		handleEditNote(text, id)
		}

	return(
		<div className='edit'>
			<input onChange={(e) => {setId(e.target.value)}}
				placeholder='id of card to change'/> 
			<input onChange={(e) => {setText(e.target.value)}}
				placeholder='new text for card'/> 
            <button className="edit" onClick={handleClick}>EDIT</button>
		</div>
	)
}