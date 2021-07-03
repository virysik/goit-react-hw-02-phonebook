import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleFilterInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: name,
    };

    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

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

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const filteredArr = this.getFilteredContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterInputChange} />

        <ContactList contactsArr={filteredArr} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
