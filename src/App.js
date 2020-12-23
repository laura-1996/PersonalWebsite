import React from 'react';
import './styles.css';


class App extends React.Component {
  render (){
    return (
      <div className='App'>
    
    <div className="top-container">
      <nav>
        <div className="row">
            <ul className="main-nav js--main-nav">
                <li><a href="#profile">Profile</a></li>
                <li><a href="#goals">Goal</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
    </nav>
      
      <h1>I'm Laura</h1>
      <h2>A Web Developer.</h2>
      
      <img className="beach" src="images/1.png" alt="spacex"/>
    </div>

    <div className="middle-container">
      <div className="profile" id="profile">
        <img className="Laura" src="images/laura-spina.png" alt="Laura-Spina"/>
        <h2>Hello.</h2>
        <p>I'm a 24 years old student from Cagliari, Sardinia and I've created this website in order to be chosen for CodeMaster.
        I'm really determined to get my place at this bootcamp because I love coding and I want it to become my career.
        My passions and hobbies are photography, travel and languages (I can actually speak four languages).
        I'm also a young mother, that means that I'm even more committed in changing my job.
        I studied at an Art High School in Padua and then I moved back to my origin region to study Economics at the University of Cagliari. By the way the university experience didn't fit for me so I quit.
        While working I tried a Web Design course in Cagliari but it didn't reflect my expectations. I learned more on Udemy about Web Design and Web Development.
        I worked in many different position and at the moment I work as a Digital Marketing Assistant for a Mattresses brand where I also occasionally create graphic design for their labels or for their facebook and instagram posts. I also help my husband with his venetian masks's website in order to practice web design.
        Right now I'm studying HTML, CSS and Javascipt to be ready for CodeMaster.
        I hope you enjoy this webpage.</p>
      </div>
      
      <hr/>
      <div className="Goals" id="goals">
        <h2>My Goals</h2>
        <div className="goal-why">
          <img className="goalimg" src="images/3.png" alt="goal"/>
          <h3>Where do I see myself in three years?</h3>
          <p>In three years I imagine myself working for a small company with a nice development team to collaborate with. I also see me and my family living in a big city like Milan or Amsterdam.
             I would probably be much better in thinking like a developer and my skills would be improved as well.
        </p>
        </div>
        
        <hr/>
        <div className="goal-why">
          <img className="whyimg" src="images/4.png" alt="why"/>
          <h2>Why?</h2>
          <h3>Three reasons to choose Talent Garden</h3>
          <p>1-Well, since I started to looking for Bootcamps in Italy I found that Talent Garden was the first for professionalism and competency. Also the opportunity of an Internship is really important if you want to start a new career as I want.<br/>
             2-The presence of campuses in other countries is an added value because it shows that this project is really worth it.<br/>
             3-I would also add that the opportunity that they're giving to young talents is enormous. We all struggle to find a university course that can provide a good job but
           at the end you have no practical skills and you end up loosing years of your life on books. I really hope to have the chance to change my life with Talent Garden because it teaches real skills in just 3 months.</p>
        </div>
      </div>
      
      
    
      <hr/>
      <div className="contact-me" id="contacts">
        <h2>Get In Touch</h2>
        <p className="contact-message">Click the button to write me an email.</p>
        <a href="mailto:lauraspina2016@gmail.com" className="btn">Contact Me</a>
      </div>
      </div>
    
   


    <footer>
      <a className="footer-link" href="https://www.linkedin.com/in/laura-spina-80aa3b172/" target="_blank" rel='noreferrer'>LinkedIn</a>
      <a className="footer-link" href="https://www.instagram.com/laura.spina_/?hl=en" target="_blank" rel='noreferrer'>Instagram</a>
      <a className="footer-link" href="https://unmaskedstore.com" target="_blank" rel='noreferrer'>Website</a>
      <p className="copywright">© 2020 Laura Spina.</p>
    </footer>

    </div>

   

      
    );
  }
}

export default App;
