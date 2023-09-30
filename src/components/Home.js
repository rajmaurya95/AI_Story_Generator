// rafce
import React from 'react';
// import React, { useContext} from 'react';
// import {Link,useNavigate} from 'react-router-dom';
import Notes from './Notes';
// import noteContext from '../context/notes/NoteContext';


const Home = (props) => {
  // const context = useContext(noteContext)
  // const { userd} = context;
  // const navigate = useNavigate();


//   const handleLogout=()=>{
//     localStorage.removeItem('token')
//     navigate('/login')
// }
  
  // console.log(userd)
   
  return (
  <>
 
    <div>
      <Notes setProgress={props.progress} showAlert={props.showAlert}/>
     

    </div>
    </>
    )
}

export default Home