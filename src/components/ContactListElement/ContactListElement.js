import { Component } from "react";
import { Li, Button } from "./ContactListElement.styles";
import PropTypes from "prop-types";

class ContactListElement extends Component {
  render() {
    const { contactId, contactName, contactNumber, onDelete } = this.props;

    return (
      <Li>
        {`${contactName}: ${contactNumber}`}
        <Button
          type="button"
          onClick={() => {
            onDelete(contactId);
          }}
        >
          Delete
        </Button>
      </Li>
    );
  }
}

export default ContactListElement;

ContactListElement.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
