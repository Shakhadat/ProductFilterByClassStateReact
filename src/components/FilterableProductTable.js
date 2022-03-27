import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }
  handleFilterTextChange = (filterText) => {
    this.setState({ filterText: filterText });
  };
  handleStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <SearchBar
            onFilterChangeText={this.handleFilterTextChange}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onInSctockChange={this.handleStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      </>
    );
  }
}

export default FilterableProductTable;
