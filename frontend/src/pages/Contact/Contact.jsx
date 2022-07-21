import React from 'react';
import "./Contact.css"
import Nav from '../../components/Nav/Nav'

function FormContact(){
    return(
       <>
       <Nav />
       <h3>kingdom of Colchis</h3>

        <div className="contenu" id="container">
          <p> Fill in the form below to contact the Royal Kingdom.</p>

        <form action="/action_page.php">
        
      
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="name" name="nom" placeholder="Your name..">
            </input>
          </div>
        </div>
      
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Email</label>
          </div>
          <div className="col-75">
            <input type="email" id="email" name="mail" placeholder="Your email..">
                </input>
          </div>
        </div>
        
        <div className="row">
          <div className="col-25">
            <label htmlFor="message">Message</label>
          </div>
          <div className="col-75">
            <textarea id="message" name="msg" placeholder="Write something.." ></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <input type="submit" value="Submit">
            </input>
        </div>
        </form>
      </div>
       </>
    )
}

export default FormContact;