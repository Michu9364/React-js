import { useState } from 'react';
import './App.css';

function App() {
  const [firstname, setfirstname] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  return (
    <div>
      <div className="split left">
        <div className="centeredtext">
          <div>Imię</div>
          <input type='text' id="input" name='firstname' onChange={name =>setfirstname(name.target.value)} />
          
          <div>Nazwisko</div>
          <input type='text' id="input" name='pass' onChange={pass =>setname(pass.target.value)} />

          <div>Email</div>
          <input type='text' id="input" name='mail' onChange={email =>setemail(email.target.value)} />
      
          <div>
          <input type="button" value="Potwierdź" onclick="sayHi()" />
          </div>

        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar man" />
        </div>
        <div className="textinfo">
            <div name="firstname">Imię: {firstname}</div>
            <div name="pass">Nazwisko: {name}</div>
            <div name="mail">Email: {email}</div>
          </div>
      </div>
    </div>
  );
}

export default App;