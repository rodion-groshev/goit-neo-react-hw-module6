import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleClick }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
