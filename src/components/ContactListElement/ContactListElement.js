import { Component } from "react";

class ContactListElement extends Component {
  render() {
    const { userId, userName, userNumber, onDelete } = this.props;

    return (
      <li>
        {`${userName}: ${userNumber}`}
        <button
          type="button"
          onClick={() => {
            onDelete(userId);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListElement;
