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
          <input type='text' name='firstname' onChange={firstname =>setfirstname(firstname.target.value)} />
          
          <div>Nazwisko</div>
          <input type='text' name='pass' onChange={name =>setname(name.target.value)} />

          <div>Email</div>
          <input type='text' name='mail' onChange={email =>setemail(email.target.value)} />
      
          <div>
          <input type="submit" value="Zatwierdź" />
          </div>

        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar man" />
        </div>
        <div className="textinfo">
            <div>Imię: {firstname}</div>
            <div>Nazwisko: {name}</div>
            <div>Email: {email}</div>
          </div>
      </div>
    </div>
  );
}

export default App;