import React, { useState } from 'react';


export default function Createnotes(props) {
  const [note , setNotes] = useState({
   title : "",
   content : "",
  });

const inputEvent = (event)=>{

  const {name,value} = event.target;
  setNotes((prev)=>{
    return{
      ...prev,
      [name]:value,

    }
  })

};
 
const addEvent = ()=>{

  props.passNote(note);
  setNotes({
    content:"",
    title:"",
  })
}
const [expand,setExpand]=useState(false);
const expandIt =()=>{
  setExpand(true);
}
  return (
    <>
    <div className="card">
       
    <div className="main-box">
     { expand?
        <input type="text"
         placeholder='Title'
         value={note.title}
         name='title'
         className='Bold'
         onChange={inputEvent} />:null}
        <textarea name="content" id="txtarea" cols=" " rows="4 "
         placeholder='Write a note'
         value={note.content}
         onChange={inputEvent} onClick={expandIt}></textarea>
      { expand? <i class="fa-solid fa-plus" onClick={addEvent}></i>:null}
    </div>
    </div>
    </>
  )
}
