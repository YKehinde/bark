import logo from './barklogo-dark.png';
import './App.css';
import Input from './Input';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const application_id = '1617268327';
  const [service, updateService] = useState('');
  const [location, updateLocation] = useState('');
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [telephone, updateTelephone] = useState('');
  const [info, updateInfo] = useState('');
  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);
  const apiHost = 'http://henry.r.bark.com';

  const [modalIsOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    loadData('services', setServices);
    loadData('locations', setLocations);
  }, []);
  
  const loadData = async (path, state) => {
    const response = await fetch(`${apiHost}/api/${path}`);
    const data = await response.json();
    state(data);
  }

  const handleSubmit = (evt) => {
    /* Prevent default submit behaviour */
    evt.preventDefault();

    if (
      service.length === 0 &&
      location.length === 0 &&
      name.length === 0 &&
      email.length === 0 
    ) {
      alert('Please fill out all required fields');
      return;
    }

    const data = {
    "application_id": application_id,
    "name": name,
    "email": email,
    "phone": telephone,
    "more_info": info,
    "location_id": 1,
    "service_id": 1
    }

    sendData(data);
  };

  const sendData = (data) => {
    axios.post(`${apiHost}/api/leads`, data, {
      responseType: 'json'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(data);
        console.log(error);
      });

    setIsOpen(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="bark-logo" alt="Bark Logo" />
        </div>
      </header>
      <main className="container">
        <h1>Find the perfect Professional for you</h1>
        <h2 className="text-light-grey">Get free quotes within minutes</h2>
        <form className="js-submit-lead" onSubmit={handleSubmit}>
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
              <div className="form-group">
                  <label htmlFor="inputExtraInformation">Any Extra Information?</label>
                  <textarea className="form-control" id="inputExtraInformation" name="extra" aria-describedby="extraInfoDescription" rows="3" onChange={e => updateInfo(e.target.value)}></textarea>
                  <small id="extraInfoDescription" className="form-text text-muted">
                      Include as much information as you can, so we can find the best Professionals
                  </small>
              </div>
              {/* submit */}
              <button type="submit" className="btn btn-primary">Find Professionals</button>
          </form>
      { modalIsOpen ?
        <Modal
        handleClose={closeModal} /> :
        null
      }
      </main>
    </div>
  );
}

export default App;
