import React from 'react';

import { List, Li, DeleteButton, Text } from './ContactList.styled';

export function ContactList({ contacts, filter = '', onDelete }) {
  const filterInLowerCase = filter.toLowerCase();
  return (
    <List>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filterInLowerCase)
        )
        .map(({ id, number, name }) => {
          return (
            <Li key={id}>
              <Text>
                {name}: {number}
              </Text>
              <DeleteButton onClick={() => onDelete(id)} type="button">
                Delete
              </DeleteButton>
            </Li>
          );
        })}
    </List>
  );
}
