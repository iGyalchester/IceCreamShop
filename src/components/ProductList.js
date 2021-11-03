import React from "react";
import Product from "./Product";
import Total from "./Total";
export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      productList: "",
    };

    this.calculateTotal = this.calculateTotal.bind(this);
  }


}

export default ProductList;
