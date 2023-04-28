import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  // static defaultProps = {
  //   contacts: [],
  //   filter: '',
  // };

  //Функція фільтрації контактів
  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };
  // Функція видалення контактів
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //Функція яка приймає data із ContactForm і записує в state.contacts.
  formSubmitHandler = data => {
    const { name } = data;
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), ...data };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
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
  render() {
    console.log('Render componentDidMount');
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedContact)
    );

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter onChange={this.filterContacts} value={filter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
