import React from 'react';
import logo from "../assets/login.jpg";
import "../App.css"

function About() {
  return (
    <div className="container mt-5">
      <div className="row bg-warning ">
          <h1 className="text-center pt-1 ">ABOUT US</h1>
        <div className="col-12 col-lg-6  " style={{border:"2px solid black", backgroundColor:"blueviolet", borderRadius:"20px"}} >
          <h1 className="text-center text-white">About Us</h1>
          <div className='  pb-4 text-d' >
            
         <p className='p-2'> It was the year 2050 and all writing had become automated with the help of AI technology. Aspiring writers now had access to a new tool called the "AI Story_Generator". It was a revolutionary program that would analyze the writer's thoughts and ideas, and generate a fully developed story in a matter of seconds. Sally was a struggling writer who had lost her creative spark, and turning to the AI Story_Generator was her last hope. As she hit the "generate" button, she was amazed by the complex and imaginative story that appeared on her screen. With this powerful tool, Sally's passion for writing was reignited and she went on to become a best-selling author.
         </p>

          </div>
         
        
        </div>
        <div className='col-lg-6 col-12  '>
        <div className='offset   mt-4 '>
<h3 className='text-white text-center ' style={{paddingRight:"68px"}} ><b> AI STORY_GENERATOR</b> </h3>
<img src={logo} alt='AI story generator' className='pht' />
       </div>
       </div>
      </div>
      <div className="card mt-3 p-4" style={{backgroundColor:"rosybrown"}}>
  <div className="card-header text-white "style={{backgroundColor:"purple"}} >
   Follow Me
  </div>
  <div className="card-body">
    <h5 className="card-title">Special  treatment</h5>
    <p className="card-text">I am fond of Web development and I have at least learnt something, I think… 🤷‍♂️

I am fluent in classics like Javascript, HTML and CSS.

My field of Interest's are building new  Web Technologies and Products and also in areas related to React js and Next JS development.

Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React Native and TypeScript</p>
    <a href="https://rajmaurya95.github.io/Portfolio/" className="btn btn-primary mx-2  ">Portfolio</a>
    <a href="https://github.com/rajmaurya95" className="btn btn-primary mx-2 ">Github</a>
  </div>
</div>
    </div>
  );
}

export default About;

