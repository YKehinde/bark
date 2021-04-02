import logo from './barklogo-dark.png';
import './App.css';
import Input from './Input';
import { useState } from 'react';


function App() {
  const [service, updateService] = useState('');
  const [location, updateLocation] = useState('');
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [telephone, updateTelephone] = useState('');
  const handleSubmit = (evt) => {};

  autocomplete = (e) => {
    console.log('yemi');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Bark-logo" alt="logo" />
        <h1>Find the perfect Professional for you</h1>
        <h2>Get free quotes within minutes</h2>
      </header>
      <main>
        <form className="js-submit-lead" onSubmit={handleSubmit} >
            <input type="hidden" name="application_id" value="example" />
            {/* Service */}
              <Input
              label="What service area you looking for?"
              forInput="inputService"
              type="search"
              name="service_id_text"
              placeholder="Enter a service (Personal Trainers etc.)"
              classList="js-autocomplete-services"
              id="inputService"
              descriptionId="serviceDescription"
              smallText="We'll find the right Professionals for you"
              handleChangeValue={e => updateService(e.target.value)} />
              {/* Area */}
              <Input
              label="Where are you looking?"
              forInput="inputLocation"
              type="search"
              name="location_id_text"
              placeholder="Enter a location (London etc.)"
              classList="js-autocomplete-location"
              id="inputLocation"
              handleChangeValue={e => updateLocation(e.target.value)} />
              {/* Name */}
              <Input
              label="Your Name"
              forInput="inputName"
              type="text"
              name="name"
              placeholder="Enter name"
              id="inputName"
              handleChangeValue={e => updateName(e.target.value)} />
              {/* Email */}
              <Input
              label="Email Address"
              forInput="inputEmail"
              type="email"
              name="email"
              placeholder="Enter email"
              id="inputEmail"
              descriptionId="emailDescription"
              smallText="We'll let you know when we've got Professionals for you"
              handleChangeValue={e => updateEmail(e.target.value)} />
              {/* Telephone */}
              <Input
              label="Telephone"
              forInput="inputTelephone"
              type="tel"
              name="phone"
              placeholder="Enter telephone"
              id="inputTelephone"
              descriptionId="telephoneDescription"
              smallText="So we can verify your information"
              handleChangeValue={e => updateTelephone(e.target.value)} />
              {/* textArea */}

              {/* submit */}
              <button type="submit" value="Submit">Submit</button>
          </form>
      </main>
    </div>
  );
}

export default App;
