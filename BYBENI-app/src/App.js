import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Cart, Menu, Footer, Content, Overlay } from "./components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      carIsOpen: false,
      cartSelectedItems: [
        {
          id: 1,
          name: "BERMUDA LONGA DE PANO",
          price: 89.9,
          category: "Bermuda",
          availableSizes: ["P", "M", "G"],
          description:
            "Com bolso embutido, a bermuda chino básica vem em duas opções de cores, viabilizando mais opções de looks para o dia-a-dia. Com bolso embutido, a bermuda chino básica vem em duas opções de cores, viabilizando mais opções de looks para o dia-a-dia.",
          imageURL: [
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/bermuda-preta_a4xt67.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/jaqueta-couro_fmbtrq.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/camisa-polo_iofbrf.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/calca-jeans_enwihg.jpg"
          ],
          isFeatured: true
        },
        {
          id: 2,
          name: "Jaqueta de Couro Preta",
          price: 240.0,
          category: "Jaqueta",
          availableSizes: ["P", "M", "G", "GG"],
          description:
            "Com bolso embutido, a bermuda chino básica vem em duas opções de cores, viabilizando mais opções de looks para o dia-a-dia. Com bolso embutido, a bermuda chino básica vem em duas opções de cores, viabilizando mais opções de looks para o dia-a-dia.",
          imageURL: [
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/jaqueta-couro_fmbtrq.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/bermuda-preta_a4xt67.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/camisa-polo_iofbrf.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/calca-jeans_enwihg.jpg"
          ],
          isFeatured: true
        }
      ]
    };
  }

  toggleMenu = event => {
    let bool = this.state.menuIsOpen;
    if (event) {
      this.setState({ menuIsOpen: !bool });
    }
  };

  toggleCart = event => {
    let bool = this.state.cartIsOpen;
    if (event) {
      this.setState({ cartIsOpen: !bool });
    }
  };

  removeCartSelectedItem = productId => {
    let copyCartSelectedItems = [...this.state.cartSelectedItems];
    function isId(value) {
      return value.id !== productId;
    }
    let newCartSelectedItems = copyCartSelectedItems.filter(isId);
    this.setState({ cartSelectedItems: newCartSelectedItems });
  };

  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
        <Menu menuIsOpen={this.state.menuIsOpen} />
        <Cart
          cartIsOpen={this.state.cartIsOpen}
          cartFunc={this.toggleCart}
          cartRemoveItemFunc={this.removeCartSelectedItem}
          cartSelectedItems={this.state.cartSelectedItems}
        />
        <Content
          menuIsOpen={this.state.menuIsOpen}
          menuFunc={this.toggleMenu}
          cartFunc={this.toggleCart}
        />
        <Footer />
        <Overlay
          cartIsOpen={this.state.cartIsOpen}
          cartFunc={this.toggleCart}
        />
      </div>
    );
  }
}

export default App;
