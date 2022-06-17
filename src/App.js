import React, { Component } from 'react';
import Section from 'components/Section';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const { contacts } = this.state;
    const isContactInList = contacts.some(
      item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );

    isContactInList
      ? alert(`${contact.name} is already in contacts!`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  filterReset = () => {
    this.setState({
      filter: '',
    });
  };

  contactFiltration = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.contactFiltration();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            filter={filter}
            onChange={this.filterHandler}
            onClick={this.filterReset}
          />
          <ContactsList
            contacts={filteredContacts}
            clickHandler={this.deleteContact}
          ></ContactsList>
        </Section>
      </>
    );
  }
}

export default App;
