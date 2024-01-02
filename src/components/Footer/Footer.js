import './Footer.scss';
import { Email } from "./smtp";
import { useState } from 'react';

function sendMail(name, email, message) {
  Email.send({
    SecureToken : "9499ea4b-db37-462e-9be1-940269a2bb89",
    To : "contact@nicolasgaillardmelac.fr",
    From : "nicolas.gaillard09@gmail.com",
    Subject : "Contact portfolio",
    Body : name + '<br>' + email + '<br>' + message
    }).then( (message) => {
        if (message === "OK") {
          alert("Je vous remercie, pour intérêt que vous me portez.\nJe reviens vers vous rapidement.");
        } else {
          alert(message);
        }
      }
    );
}

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    sendMail(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <h2 class="title">Contact</h2>                  
        <label for="name">
          <input class="input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="" required/>
          <span>Nom</span>
        </label>
        <label for="email">
            <input class="input" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" required/>
            <span>Email</span>
        </label>               
        <label for="message">
            <textarea class="input" id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <span>Message</span>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </footer>
  );
}

export default Footer;