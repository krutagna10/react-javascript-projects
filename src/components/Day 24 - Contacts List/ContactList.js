import ContactItem from "./ContactItem";
import { useContext } from "react";
import { AgeVisibleContext } from "./Context";

const ContactList = ({ contacts }) => {
  const { isAgeVisible } = useContext(AgeVisibleContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          {isAgeVisible && <th>Age</th>}
          <th>Show/Hide Age</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <ContactItem key={index} index={index} contact={contact} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
