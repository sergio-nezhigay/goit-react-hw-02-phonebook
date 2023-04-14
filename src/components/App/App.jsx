import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Section,
  ContactForm,
  ContactList,
  Filter,
} from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const number = e.target.elements.number.value.trim();
    if (this.state.contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              id: nanoid(),
              name: name,
              number: number,
            },
          ],
          filter: '',
        };
      });
    }
    e.target.reset();
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChange={this.onChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={this.onDelete}
          />
        </Section>
      </Container>
    );
  }
}
