import React from "react";
export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    const productList = [
      { name: "Vanilla", price: 6 },
      { name: "Strawberry", price: 8 },
      { name: "Chocolate", price: 10 },
    ];
  }

  add() {
    this.setState({
      qty: this.state.qty + 1,
    });
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1,
    });
  }

  render() {
    return (
      <div>
        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name}: ${this.props.price}
            </h4>
          </div>
          <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6 text-right">
            <button className="btn btn-outline-primary" onClick={this.add}>
              +
            </button>
            <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>
              -
            </button>
          </div>
        </div>

        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name}: ${this.props.price}
            </h4>
          </div>
          <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6 text-right">
            <button className="btn btn-outline-primary" onClick={this.add}>
              +
            </button>
            <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>
              -
            </button>
          </div>
        </div>

        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name}: ${this.props.price}
            </h4>
          </div>
          <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6 text-right">
            <button className="btn btn-outline-primary" onClick={this.add}>
              +
            </button>
            <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>
              -
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Product;
