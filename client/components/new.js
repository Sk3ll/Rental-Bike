import React, { Component } from "react";
import axios from "axios";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      typeBike: name,
      price: 0
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      typeBike: this.state.typeBike,
      price: this.state.price
    };
    axios.post("http://localhost:3333/api/items/", data).then(() => {
      //document.getElementById("new").reset();
      console.log("Success!")
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <>
      <h3>🤑 Create New Rent</h3>
        <section className="new-rent__inputs" >
            <label className="inputs__item">
                <span>Bike Name</span>
                <input type="text" name="title" onChange={this.onChange} id="new"/>
            </label>
            <label className="inputs__item" htmlFor="bike-type">
                <span>Bike Type</span>
                <select id="bike-type" name="typeBike"  onChange={this.onChange} id="new">
                <option hidden defaultValue defaultValue > </option>
                    <option value="Road">Road</option>
                    <option value="Mountain">Mountain</option>
                    <option value="Hybrid">Hybrid/commuter</option>
                    <option value="Cyclocross">Cyclocross</option>
                    <option value="Folding">Folding</option>
                    <option value="Electric">Electric</option>
                    <option value="Touring">Touring</option>
                    <option value="Women's">Women’s</option>
                </select>
            </label>
            <label className="inputs__item">
                <span>Rent Price</span>
                <input type="number" name="price" onChange={this.onChange} id="new"/>
            </label>
            <button className="new-rent__btn" onClick={this.onSubmit}>Submint rent</button>
        </section>
      </>
    );
  }
}
export default New;
