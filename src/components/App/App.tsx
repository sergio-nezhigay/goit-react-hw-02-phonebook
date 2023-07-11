import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, ContactForm, ContactList, Filter } from '../index';
import {
  IFormValues,
  IFormHelpers,
  IAppState,
} from '../../interfaces/Interfaces';

export class App extends Component<{}, IAppState> {
  state: IAppState = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = ({ name, number }: IFormValues, { resetForm }: IFormHelpers) => {
    if (
      this.state.contacts.some(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
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
    resetForm();
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    this.setState((prevState: IAppState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  onDelete = (id: string) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  filterContacts = ({ contacts, filter }: IAppState) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts({ contacts, filter });
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length ? (
            <>
              <Filter filter={filter} onChange={this.onChange} />
              <ContactList
                contacts={filteredContacts}
                onDelete={this.onDelete}
              />
            </>
          ) : (
            ''
          )}
        </Section>
      </Container>
    );
  }
}
