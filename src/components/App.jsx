import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //Функція фільтрації контактів
  const filterContacts = e => {
    setFilter(e.target.value);
  };

  // Функція видалення контактів
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  //Функція яка приймає data із ContactForm і записує в state.contacts.
  const formSubmitHandler = data => {
    const { name } = data;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), ...data };
    setContacts([newContact, ...contacts]);
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts'); // get contacts with localStorage
    const parseContacts = JSON.parse(contacts) ?? []; // parse contacts or set as empty array if null
    this.setState({ contacts: parseContacts }); // set contacts
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  console.log('Render componentDidMount');
  const normalizedContact = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedContact)
  );

  return (
    <div>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h1>Contacts</h1>
      <Filter onChange={filterContacts} value={filter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};