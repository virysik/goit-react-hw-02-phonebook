import { Component } from "react";
import { Ul } from "./ContactList.styles";
import ContactListElement from "../ContactListElement/ContactListElement";
import PropTypes from "prop-types";

class ContactList extends Component {
  render() {
    const { contactsArr, onDelete } = this.props;

    return (
      <Ul>
        {contactsArr.map(({ id, name, number }) => {
          return (
            <ContactListElement
              key={id}
              contactId={id}
              contactName={name}
              contactNumber={number}
              onDelete={onDelete}
            />
          );
        })}
      </Ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
