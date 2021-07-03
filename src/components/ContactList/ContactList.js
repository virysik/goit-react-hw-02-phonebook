import { Component } from "react";

class ContactList extends Component {
  render() {
    const { contactsArr, onDelete } = this.props;
    return (
      <ul>
        {contactsArr.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}:{number}
              <button
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
