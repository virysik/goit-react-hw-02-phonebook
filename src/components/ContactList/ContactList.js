import { Component } from "react";
import ContactListElement from "../ContactListElement/ContactListElement";

class ContactList extends Component {
  render() {
    const { contactsArr, onDelete } = this.props;

    return (
      <ul>
        {contactsArr.map(({ id, name, number }) => {
          return (
            <ContactListElement
              key={id}
              userId={id}
              userName={name}
              userNumber={number}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
