import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWraper } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListWraper>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ContactListWraper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
