import React, { useState } from "react";
import NoteContext from "./NoteContext";
// import { useState } from "react";

const NoteState=(props)=>{
  const host="http://localhost:5000"
    const notesinitial=[]
    const [notes, setNotes] = useState(notesinitial);
    // const userInitial = [];
    // const [userd, setUserd] = useState(userInitial);
    
    //  Get all notes
    const getNotes=async()=>{
      // API CALL
      const respone=await fetch(`${host}/api/notes/fetchallnotes`,{
        method:'GET',
        headers:{'Content-Type':'application/json',"auth-token":localStorage.getItem('token')}
      })
      const json=await respone.json()
      setNotes(json);

      if (Array.isArray(json)) {
        // Reverse the order of the data
        json.reverse();
        setNotes(json);
      } else {
        console.error("JSON data is not an array:", json);
      }

      // setNotes(json)
    }
    

    //  Add a note
    const addNote=async(title,description,tag)=>{
      const respone=await fetch(`${host}/api/notes/addnote`,{
        method:'POST',
        headers:{'Content-Type':'application/json',"auth-token":localStorage.getItem('token')},
        body:JSON.stringify({title,description,tag})
      })
      const json=await respone.json()
      // console.log(json)
      // console.log('adding a new note')
      let re= notes.concat(json)

      if (Array.isArray(re)) {
        // Reverse the order of the data
        re.reverse();
        setNotes(re);
      } else {
        console.error("JSON data is not an array:", json);
      }
     
    }
    // Delete a Note
    const deleteNote=async(id)=>{
      // API call
      const respone=await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json',"auth-token":localStorage.getItem('token')}
      })
      
      const json= await respone.json();
      console.log(json)
      // console.log('deleting a note with id '+id)
      const newnotes=notes.filter((note)=>{return note._id!==id})
      setNotes(newnotes);

    }

    // Edit a Note
    const editNote=async(id,title,description,tag)=>{
      // API CALL
      const respone=await fetch(`${host}/api/notes/updatenote/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json',"auth-token":localStorage.getItem('token')},
        body:JSON.stringify({title,description,tag})
      })
      const json= await respone.json();
      console.log(json)
    
      // Logic to edit in a client
      let newNotes=JSON.parse(JSON.stringify(notes)) //deep copy of notes
      for (let index = 0; index < newNotes.length; index++) {
        const element = notes[index];
        if (element._id===id) {
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
        // console.log(newNotes)
        
      }
      setNotes(newNotes)

    }

    //  Get all notes
//     const getUser=async()=>{
//       // API CALL
//       const respone=await fetch(`${host}/api/auth/getuser`,{
//         method:'POST',
//         headers:{'Content-Type':'application/json',"auth-token":localStorage.getItem('token')}
//       })
//       const user=await respone.json()

//       // console.log(user);
//       setUserd(user);
//     }
// getUser();

    return (
        
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState;