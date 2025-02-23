import { useSelector } from 'react-redux';
import Contact from '../ContactItem/Contact';
import { selectFilteredContacts } from '../../redux/selectors';
import './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="ContactList">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
