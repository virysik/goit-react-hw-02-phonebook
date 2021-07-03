import { Component } from "react";

class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input onChange={onChange} type="text" name="filter"></input>
      </>
    );
  }
}

export default Filter;
