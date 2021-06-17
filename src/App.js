import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
=======
import './App.css';

>>>>>>> c55c71bcf59b67ecd73a31805de3855e9b0d26c8
function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const addContact = (name, phone, email) => {
    setContacts([...contacts, 
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  const [appointments, setAppointments] = useState([]);
  const addAppointments = (title, contact, date, time) => {
    setAppointments([...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ])
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
<<<<<<< HEAD
    <div className = 'app row'>
=======
    <div className='app'>
>>>>>>> c55c71bcf59b67ecd73a31805de3855e9b0d26c8
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Kontakty
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Spotkania
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments} 
              addAppointments={addAppointments} 
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
