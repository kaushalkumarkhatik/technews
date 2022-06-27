import React from 'react';

const Footer = () => {
  const github="https://github.com/kaushalkumarkhatik";
  const insta="https://www.instagram.com/kaushal__kumar__khatik/";
  const linkdin="https://www.linkedin.com/in/kaushal-kumar-khatik-67416220a";
  return (
    <>
     <a class="gotopbtn" href="/#"> <i class="fas fa-arrow-up"></i> </a>
    <footer>
   <h3>Copyright ©️ 2021 KKK </h3>
     <div className="wrap">
        <div className="icon github">
          <a href={github} target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
    </div>
        <div className="icon instagram">
          <a href={insta} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
    </div>
        <div className="icon linkdin">
          <a href={linkdin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
    </div>
    </div>
   <h4>Design By:-Kaushal Kumar Khatik</h4>
    </footer
    > < />

  );
}


export default Footer;