import ContactList from "./ContactList";
import { AgeVisibleContext } from "./Context";
import { useEffect, useState } from "react";

const url = "https://randomuser.me/api/?results=5";

const ContactsApp = () => {
  const [contacts, setContacts] = useState([]);
  const [isAgeVisible, setIsAgeVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Data not found");
      })
      .then((data) => {
        console.log(data.results[0]);
        setContacts(data.results);
      })
      .catch((error) => alert(`${error.name}: ${error.message}`))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <AgeVisibleContext.Provider value={{ isAgeVisible, setIsAgeVisible }}>
        <h1>Contacts List App</h1>
        <ContactList contacts={contacts} />
      </AgeVisibleContext.Provider>
    </div>
  );
};

export default ContactsApp;
