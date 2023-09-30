import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light footer ">
      
      <div className="text-center p-2">
        <p>  All Rights Reserved &copy; {new Date().getFullYear()} Story_Generator..</p>
      </div>
    </footer>
  );
};

export default Footer;
