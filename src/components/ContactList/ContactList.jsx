import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import Notification from "../Notification/Notification";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const getFiltersContacts = (contacts, filtersName) => {
  if (filtersName) {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtersName.toLowerCase())
    );
  } else {
    return contacts;
  }
};
const ContactList = () => {
  const filtersName = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = getFiltersContacts(contacts, filtersName);

  return visibleContacts.length > 0 ? (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  ) : (
    <Notification />
  );
};

export default ContactList;
