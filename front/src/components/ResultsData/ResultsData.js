// search input + search button + data retuned from call (cards)
import React from 'react'

export default function ResultsData() {

  return (
    <div>
      <input type="text" placeholder='Search by title'></input>
      <button id="searchButton">Search</button>
      <Card/>

    </div>
  )
}



function Card() {
  
  return (
    <div>
        <h3>title</h3>
        <p>code snippet</p>
        <p>description lorum ipsum lorum ipsum</p>
  </div>
  ) 
}

