import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/NoteContext';
import HashLoader from "react-spinners/HashLoader";





const AddNote = (props) => {
  

    // Its about your data base and store your story in your database 

  const context = useContext(noteContext)
  const {addNote}=context;
  const [note, setNote] = useState({title:"",description:"",tag:"Stroy"});
  const [story, setStroy] = useState("");
  const [loading, setLoading] = useState(false);

  // onclick after save
  const handleclick=(e)=>{
    setLoading({loading:true});
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    props.showAlert("Added Successfully","success")
    setNote({title:"",description:"",tag:"Stroy"})
    document.getElementById("myform").reset()
    setStroy("");
    setLoading(false);
   
  }


  // onchange
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  // still here 



  // Function to call the OpenAI API


 async function generateStory(prompt) {
  
  const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR-API-KEY',
          organization: "ID",
      },
      body: JSON.stringify({
          model: 'gpt-3.5-turbo-instruct',
          prompt:prompt ,
          max_tokens: 1200,
          temperature: 1.0,
      }),
  });
//Waiting for response of generateStory function's response

  const data = await response.json();

  if (data.choices && data.choices.length > 0) {
    let rt =data.choices[0].text;
    let frt = rt.replace(/\s+/g, ' ').trim();
    setLoading(false);
    setStroy(frt);
      return data.choices[0].text ;
  } else {
      // Return a default message or an error message to the user
      setLoading(false);
      return 'An error occurred while generating the story. Please try again.';
  }
}

// to call generateStory function on button click
const genStory=(e)=>{
  setLoading({loading:true});
  e.preventDefault();
generateStory(` Please Write a 100 word story about this topic "${note.title}"`);

}
 
  
  return (
    
    <div className="container my-3 mx-2  ">
      <h1 className='mb-4 text-center text-light '>WELCOME TO AI STORY_GENERATOR TOOL</h1>
      <form className=' px-3 set' id='myform'>

        
        {/* Write a topic to generate story */}

        <div className="mb-3 bg-warning mt-2 ">
          <label htmlFor="description" className="form-label ft px-2 text-black"> WRITE TOPIC TO GENERATE STORY</label>
         
        <textarea name="title" className="form-control textA " id="title" cols="30" rows="4" onChange={onChange} style={{resize:'none'}} placeholder='Write your topic here....'></textarea>
        </div>
     

  
<HashLoader
        color={"#e081ef"}
        loading={loading}
        
        size={80}
     
        className='sp_Over  '
      />
     
        <div className="d-grid gap-2 col-6 mx-auto">
        <button className='button btn bg-light btn-lg mb-3' disabled={note.title.length<5 && note.description.length<5} onClick={genStory}>GENERATE</button>
</div>
        <div className="mb-3 bg-warning">
          <label htmlFor="description" className="form-label ft px-2  text-black">GENERATED STORY</label>
          {/* <input type="textarea" className="form-control" id="desc" name='description'  onChange={onChange}/> */}
        <textarea name= "description" className="form-control textA" id="desc" cols="30" rows="10" defaultValue={story} onChange={onChange} style={{resize:'none'}} placeholder='Generated story....' ></textarea>
        </div>
        <div className={`d-grid gap-2 col-6 mx-auto  `}>
        <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn button bg-light btn-lg text-dark" onClick={handleclick}>SAVE STORY</button>
        </div>
      </form>
      </div>
  )
}

export default AddNote
