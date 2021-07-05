import { Component } from "react";
import { nanoid } from "nanoid";
import { Container, Title, TitleContacts } from "./App.styles";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

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
      id: nanoid(),
    };
    const normalizedName = name.toLowerCase();
    const contactExists = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (contactExists) {
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
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter onChange={this.handleFilterInputChange} />

        <ContactList contactsArr={filteredArr} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
