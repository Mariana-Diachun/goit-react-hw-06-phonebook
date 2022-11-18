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

// export const ContactList = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filteredContacts = useSelector(
//     state => state.contacts.filteredContacts
//   );
//   console.log(contacts);
//   console.log(filteredContacts);

//   return (
//     <List>
//       {filteredContacts.length > 0 ? (
//         <div>
//           {filteredContacts.map(contact => {
//             return <ContactItem key={contact.id} {...contact} />;
//           })}
//         </div>
//       ) : (
//         <div>
//           {contacts.map(contact => {
//             return <ContactItem key={contact.id} {...contact} />;
//           })}
//         </div>
//       )}
//     </List>
//   );
// };
