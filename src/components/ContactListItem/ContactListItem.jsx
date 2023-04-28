import PropTypes from 'prop-types';
import { ContactItemWrapper, DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(contact => (
        <ContactItemWrapper key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            delete
          </DeleteButton>
        </ContactItemWrapper>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
