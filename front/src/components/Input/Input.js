
import { useState } from "react"
import React from 'react'


const randomData = [
  {
    id: 1,
    title: "example",
  comment: "example",
  code: "example"
  },
  {
    id: 2,
    title: "exampleTwo",
  comment: "exampleTwo",
  code: "exampleTwo"
  },
  {
    id: 3,
    title: "exThree",
  comment: "exThree",
  code: "exThree"
  }

]

export default function Input() {
  const [file, setFile] = useState("")





  
return (
<>
<input id= "input" type="text" placeholder="Add title"></input>
<input id= "input" type="text" placeholder="Add description"></input>
<input id= "input" type="text" placeholder="Add code snippet"></input>
<button id="button" >Add</button>
</>
)
}

