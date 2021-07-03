import { Component } from "react";

class ContactList extends Component {
  render() {
    const { contactsArr } = this.props;
    return (
      <ul>
        {contactsArr.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}:{number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;