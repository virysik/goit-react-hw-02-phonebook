import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleFilterInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (contact) => {
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

  render() {
    const filteredArr = this.getFilteredContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterInputChange} />

        <ContactList contactsArr={filteredArr} />
      </div>
    );
  }
}

export default App;
