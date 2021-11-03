import React from "react";
export class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const total = this.props.total;
    const mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px",
    };
    return (
      <div style={{ marginTop: "30px", backgroundColor: "#F6F6F6", padding: "10px" }}>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">total price:</span>
          <span className="col-6 text-right">${total}</span>
        </h3>
      </div>
    );
  }
}

export default Total;
