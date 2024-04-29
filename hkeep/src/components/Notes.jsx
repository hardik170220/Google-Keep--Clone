import React from 'react'

export default function Notes(props) {
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
    <div className="grid">
    <div className="Notes-card">
        <p className='Bold'>{props.title}</p>
        <p>{props.content}</p>
        <i class="fa-solid fa-trash" onClick={deleteNote} ></i>
    </div>
    </div>
    
    </>
  )
}
