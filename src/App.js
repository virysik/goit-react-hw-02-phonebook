import { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { number, name } = this.state;
    const contact = {
      number,
      name,
      id: name,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
    this.resetFormInputs();
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

  resetFormInputs = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredArr = this.getFilteredContact();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          onChange={this.handleInputChange}
          type="text"
          name="filter"
        ></input>

        <ul>
          {filteredArr.map(({ id, name, number }) => {
            const filter = this.state.filter;
            const normalizedFilter = filter.toLowerCase();
            const fiteredName = name.toLowerCase().includes(normalizedFilter);

            return (
              <li key={id}>
                {name}:{number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
