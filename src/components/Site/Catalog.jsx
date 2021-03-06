import React, { Component } from "react";
import axios from "axios";
import ProductBox from "./ProductBox";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.props.match.params.categoryName,
      products: []
    };
  }

  getProducts = category => {
    let self = this;
    axios
      .get(`https://bybeni-back.herokuapp.com/api/product?category=${category}`)
      .then(function(response) {
        self.setState({ products: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProducts(this.state.category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.props.match.params.categoryName !== this.state.category) {
      this.setState({ products: [] });
      this.getProducts(nextProps.props.match.params.categoryName);
      this.setState({ category: nextProps.props.match.params.categoryName });
    }
  }

  render() {
    return (
      <section className="content-container">
        <div className="catalog-grid">
          {this.state.products.map((item, idx) => {
            return <ProductBox key={idx} product={item} />;
          })}
        </div>
      </section>
    );
  }
}

export default Catalog;
