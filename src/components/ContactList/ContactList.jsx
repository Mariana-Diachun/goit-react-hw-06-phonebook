import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <List>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} {...contact} />;
      })}
    </List>
  );
};
