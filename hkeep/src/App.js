
import { useState } from 'react';
import './App.css';
import Createnotes from './components/Createnotes';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {
  const [addItem , setAddItem] = useState([]);
  const addNote = (note)=>{
    setAddItem((prevData)=>{
      return [...prevData, note]
    });
  }
  const onDelete =(id)=>{
    setAddItem((olddata)=>
    olddata.filter((currdata, index)=>{
     return index!==id;
    }))
  }
  return (
    <>
    
    <Navbar/>
     <Createnotes 
     passNote = {addNote}/>
    
     {addItem.map((val,index)=>{
      return <Notes 
      key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={onDelete}/>
     })} 
    
    </>
  )
}

export default App;
