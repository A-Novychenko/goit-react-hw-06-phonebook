import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <List>
        {contacts.map(({ name, id, number }) => (
          <Item key={id}>
            <Contact name={name} number={number} id={id}></Contact>
          </Item>
        ))}
      </List>
    </>
  );
};
