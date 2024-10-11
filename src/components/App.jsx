import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import Notification from "./Notification/Notification";
import "./App.css";

function App() {
  const getLS = () => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return [];
    }
  };

  const [contacts, setContacts] = useState(getLS);
  const [filter, setFilter] = useState("");
  const initialValues = {
    name: "",
    number: "",
  };

  const contactID = nanoid();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        "Please enter a valid phone number"
      )
      .required("Required"),
  });

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (values, actions) => {
    setContacts((prev) => {
      return [...prev, { ...values, id: contactID }];
    });

    actions.resetForm();
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClick = (id) => {
    setContacts(contacts.filter((contact) => contact.id != id));
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        value={initialValues}
        handleSubmit={handleSubmit}
        validation={validationSchema}
      />
      <SearchBox value={filter} handleChange={handleChange} />
      {contacts.length > 0 && visibleContacts.length > 0 ? (
        <ContactList contacts={visibleContacts} handleClick={handleClick} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
