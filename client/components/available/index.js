import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/api/items").then(items => {
      this.setState({
        items: items.data
      });
    });
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.items !== this.state.items) {
      axios.get("http://localhost:3333/api/items").then(items => {
        this.setState({
          items: items.data
        });
      });
    }

  }

  onDelete(e) {
    axios
      .delete(`http://localhost:3333/api/items/${e}`)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  onRent(e) {
    const data = {
      title: e.name,
      typeBike: e.typeBike,
      price: e.price
    };
    axios
      .delete(`http://localhost:3333/api/items/${e._id}`)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err)
      })
    axios
      .post("http://localhost:3333/api/rentals/", data).then(() => {
        console.log("Success!")
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <section className="available-rent">
        <h3>🚲 Available Bicycles ({this.state.items.length})</h3>
        <ul>
          {this.state.items.map(item => (
            <li key={item._id} className="available-rent__item">
            <span>{item.name} / {item.typeBike} / ${item.price}</span>
            <div className="item__btns">
              <button className="btns__rent" onClick={()=> this.onRent(item)}>Rent</button>
              <button className="btns__delete" onClick={()=> this.onDelete(item._id)} >Delete</button>
            </div>
          </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Index;
