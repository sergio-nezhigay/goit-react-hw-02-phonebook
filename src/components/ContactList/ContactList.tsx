import { List, Li, DeleteButton, Text } from './ContactList.styled';
import { IContact } from '../../interfaces/Interfaces';

interface IContactList {
  contacts: IContact[];
  onDelete: (id: string) => void;
}

export function ContactList({ contacts, onDelete }: IContactList) {
  return (
    <List>
      {contacts.map(({ id, number, name }: IContact) => {
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

export default ContactList;
