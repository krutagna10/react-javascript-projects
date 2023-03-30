import { useState, useContext } from "react";
import { AgeVisibleContext } from "../../ContactContext";

const ContactItem = ({ index, contact }) => {
  const { isAgeVisible, setIsAgeVisible } = useContext(AgeVisibleContext);

  const handleClick = () => {
    setIsAgeVisible((prevIsAgeVisible) => {
      return !prevIsAgeVisible;
    });
  };

  console.log(contact.email);

  const { title, first: firstName, last: lastName } = contact.name;
  const fullName = `${title}. ${firstName} ${lastName}`;

  return (
    <tr>
      <td>{index}</td>
      <td>
        <img
          src={contact.picture.medium}
          style={{ width: "5rem", height: "5rem" }}
          alt={fullName}
        />
      </td>
      <td>{fullName}</td>
      <td>{contact.email}</td>
      {isAgeVisible && <td>{contact.dob.age}</td>}
      <td>
        <button onClick={handleClick}>
          {isAgeVisible ? "Hide Everyone's Age" : "Show Everyone's Age"}
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
