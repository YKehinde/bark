import logo from './barklogo-dark.png';
import './App.css';
import Input from './Input';
import { useState, useEffect } from 'react';

function App() {
  const [service, updateService] = useState('');
  const [location, updateLocation] = useState('');
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [telephone, updateTelephone] = useState('');
  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);
  const apiHost = 'http://henry.r.bark.com';
  
  useEffect(() => {
    loadData('services', setServices);
    loadData('locations', setLocations);
  }, [])
  
  const loadData = async (path, state) => {
    const response = await fetch(`${apiHost}/api/${path}`);
    const data = await response.json();
    state(data);
  }

  const handleSubmit = (evt) => {
    /* Prevent default submit behaviour */
    evt.preventDefault();

    console.log(evt);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Bark-logo" alt="logo" />
      </header>
      <main className="container">
        <h1>Find the perfect Professional for you</h1>
        <h2 className="text-light-grey">Get free quotes within minutes</h2>
        <form className="js-submit-lead" onSubmit={handleSubmit} >
            <input type="hidden" name="application_id" value="1617268327" />
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
