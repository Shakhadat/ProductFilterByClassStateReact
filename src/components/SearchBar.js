import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
   

  }

  handleFilterTextChange=(e)=>{
    this.props.onFilterChangeText(e.target.value)
  }
  handleInstockChange=(e)=>{
      this.props.onInSctockChange(e.target.value)
  }
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            className="serchinput"
            placeholder="Izlash..."
            value={this.props.inputText}
            onChange={this.handleFilterTextChange}
          />

          <p>
            <input
              type="checkbox"
              id="onlyInStock"
              name="onlyInStock"
              checked={this.props.inStockOnly}
              onChange={this.handleInstockChange}
            />
            <label htmlFor="onlyInStock">
              Faqat omborda mavjud bo'lgan maxsulotlar
            </label>
          </p>
        </div>
      </>
    );
  }
}

export default SearchBar;
