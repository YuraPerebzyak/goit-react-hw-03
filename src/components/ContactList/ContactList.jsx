import { nanoid } from "nanoid";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={nanoid()}
          userName={contact.name}
          userNumber={contact.number}
          userId={contact.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
